import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import _ from 'lodash';
import {
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  LISTA_CONTATO_USUARIO,
  MODIFICA_MENSAGEM,
  LISTA_CONVERSA_USUARIO,
  ENVIA_MENSAGEM_SUCESSO,
  LISTA_CONVERSAS_USUARIO
} from './types';

export const modificaAdicionaContatoEmail = (texto) => {
  return {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
  }
}

export const adicionaContato = (email) => {
  return dispatch => {
    let emailB64 = b64.encode(email)

    firebase.database().ref(`/contatos/${emailB64}`)
      .once('value') // on -> fica escutando alteração no firebase || once -> só quero recuperar informação no momento
      .then(snapshot => {
        if (snapshot.val()) {
          /**
           * Solução com o uso do lodash abaixo:
           * OBJETO
           * snapshot.val() = { emailB64 -> _id documento aletorio gerado pelo firebase -> nome }
           * ARRAY
           * snapshot.val() = [ emailB64 -> indice 0,1,2,3... -> nome ]
           */
          const dadosUsuario = _.first(_.values(snapshot.val())) // retorna um array com base em um objeto

          // email do usuario autenticado
          let emailUsuarioAuth = firebase.auth().currentUser.email
          let emailUsuarioAuthB64 = b64.encode(emailUsuarioAuth)

          firebase.database().ref(`/usuario_contatos/${emailUsuarioAuthB64}`)
            .push({ email: email, nome: dadosUsuario.nome })
            .then(() => dispatch({ type: ADICIONA_CONTATO_SUCESSO, payload: true }))
            .catch((erro) => dispatch({ type: ADICIONA_CONTATO_ERRO, payload: erro.message }))
        } else {
          dispatch({ type: ADICIONA_CONTATO_ERRO, payload: 'E-mail informado não corresponde a um usuário válido!' })
        }
      })
  }
}

export const habilitaInclusaoContato = () => {
  return {
    type: ADICIONA_CONTATO_SUCESSO,
    payload: false
  }
}

export const contatosUsuarioFetch = () => {
  const user = firebase.auth().currentUser

  return (dispatch) => {
    let emailUsuarioB64 = b64.encode(user.email)

    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
      .on('value', snapshot => {
        dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() })
      })
  }
}

export const modificaMensagem = (texto) => {
  return {
    type: MODIFICA_MENSAGEM,
    payload: texto
  }
}

export const enviarMensagem = (mensagem, contatoNome, contatoEmail) => {
  // dados do contato (contatoNome e contatoEmail)

  // dados do usuario auth (email)
  const { currentUser } = firebase.auth()
  const usuarioEmail = currentUser.email

  return dispatch => {
    // conversão para base 64
    const usuarioEmailB64 = b64.encode(usuarioEmail)
    const contatoEmailB64 = b64.encode(contatoEmail)

    /**
     * Fazer o envio do usuario para o contato, tipo : 'enviado'
     * replicar como recebimento para o contato, tipo: 'recebido'
     */
    firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
      .push({ mensagem: mensagem, tipo: 'e' })
      .then(() => {
        firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
          .push({ mensagem: mensagem, tipo: 'r' })
          .then(() => dispatch({ type: ENVIA_MENSAGEM_SUCESSO }))
      })
      // armazenar o cabeçalho de conversa do usuario auth
      .then(() => {
        firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`)
          .set({ nome: contatoNome, email: contatoEmail })
      })
      // armazenar o cabecalho de conversa do contato
      .then(() => {
        firebase.database().ref(`/contatos/${usuarioEmailB64}`)
          .once('value')
          .then(snapshot => {
            const dadosUsuario = _.first(_.values(snapshot.val()))
            firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`)
              .set({ nome: dadosUsuario.nome, email: usuarioEmail })
          })
      })
  }
}

export const conversaUsuarioFetch = (contatoEmail) => {
  // compor os email na base64
  const { currentUser } = firebase.auth()
  let usuarioAuthEmailB64 = b64.encode(currentUser.email)
  let contatoEmailB64 = b64.encode(contatoEmail)

  return dispatch => {
    firebase.database().ref(`/mensagens/${usuarioAuthEmailB64}/${contatoEmailB64}`)
      .on('value', (snapshot) => {
        dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() })
      })
  }
}

export const conversasUsuarioFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    let usuarioAuthEmailB64 = b64.encode(currentUser.email)

    firebase.database().ref(`/usuario_conversas/${usuarioAuthEmailB64}`)
      .on('value', snapshot => {
        dispatch({ type: LISTA_CONVERSAS_USUARIO, payload: snapshot.val() })
      })
  }
}