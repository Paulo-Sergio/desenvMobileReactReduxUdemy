import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  MODIFICA_ADICIONA_CONTATO_EMAIL
} from './types';

export const modificaAdicionaContatoEmail = (texto) => {
  return {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
  }
}

export const adicionaContato = (email) => {
  return {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
  }
}