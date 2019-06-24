import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import _ from 'lodash';
import {
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  LISTA_CONTATO_USUARIO
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