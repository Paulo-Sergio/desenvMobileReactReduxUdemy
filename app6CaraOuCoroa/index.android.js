import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';
import Principal from './src/components/Principal';
import Resultado from './src/components/Resultado';

export default class app6CaraOuCoroa extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='principal' component={Principal} initial={true} title="Cara ou Coroa" />
        <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
        <Scene key='outrosjogos' component={OutrosJogos} title="Outros Jogos" />
        <Scene key='resultado' component={Resultado} title="Resultado" />
      </Router>
    );
  }
}

AppRegistry.registerComponent('app6CaraOuCoroa', () => app6CaraOuCoroa);
