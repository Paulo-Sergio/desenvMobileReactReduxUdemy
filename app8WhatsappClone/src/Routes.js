import React from 'react';
import { Router, Scene } from 'react-native-router-flux'

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';

export default props => (
  <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#FFF' }}>
    <Scene key='formLogin' component={FormLogin} title='Login' hideNavBar={true} />
    <Scene key='formCadastro' component={FormCadastro} title='Cadastro' hideNavBar={false} />
    <Scene key='boasVindas' component={BoasVindas} title='Bem-Vindo' hideNavBar={true} />
    <Scene key='principal' component={Principal} title='Principal' hideNavBar={true} />
    <Scene key='adicionarContato' component={AdicionarContato} title='Adicionar Contato' hideNavBar={false} />
  </Router>
);
