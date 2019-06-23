import {
  MODIFICA_ADICIONA_CONTATO_EMAIL
} from '../actions/types';

const INITIAL_STATE = {
  adiciona_contato_email: 'teste@teste.com.br'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_ADICIONA_CONTATO_EMAIL:
      return { ...state, adiciona_contato_email: action.payload }
    default:
      return state;
  }
}