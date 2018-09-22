import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const modificaEmail = (texto) => {
  return {
    type: 'modifica_email',
    payload: texto
  }
}

export const modificaSenha = (texto) => {
  return {
    type: 'modifica_senha',
    payload: texto
  }
}

export const modificaNome = (texto) => {
  return {
    type: 'modifica_nome',
    payload: texto
  }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
  // middleware redux-thunk
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((user) => cadastroUsuarioSucesso(dispatch))
      .catch((erro) => cadastroUsuarioErro(erro, dispatch))
  }
}

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch({ type: 'cadastro_usuario_sucesso' })

  // navegue para a tela de boas vindas
  Actions.boasVindas()
}

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: 'cadastro_usuario_erro', payload: erro.message })
}