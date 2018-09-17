const INITIAL_STATE = {
  nome: 'paulo',
  email: 'paulo@gmail.com',
  senha: '123456',
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)

  if (action.type == 'modifica_email') {
    return { ...state, email: acttion.payload }
  }
  if (action.type == 'modifica_senha') {
    return { ...state, senha: acttion.payload }
  }

  return state
}