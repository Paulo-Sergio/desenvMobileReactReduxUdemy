/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';

export default class app3PedraPapelTesoura extends Component {
  constructor(props) {
    super(props)

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' }
  }

  jokenpo(escolhaUsuario) {
    // gera numero aleatorio 0, 1 ou 2
    let numeroAleatorio = Math.floor(Math.random() * 3)

    let escolhaComputador = ''
    switch (numeroAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    let resultado = ''

    if (escolhaComputador == 'pedra') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Empate'
      } else if (escolhaUsuario == 'papel') {
        resultado = 'Você ganhou'
      } else if (escolhaUsuario == 'tesoura') {
        resultado = 'Você perdeu'
      }
    }

    if (escolhaComputador == 'papel') {
      if (escolhaUsuario == 'papel') {
        resultado = 'Empate'
      } else if (escolhaUsuario == 'tesoura') {
        resultado = 'Você ganhou'
      } else if (escolhaUsuario == 'pedra') {
        resultado = 'Você perdeu'
      }
    }

    if (escolhaComputador == 'tesoura') {
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Empate'
      } else if (escolhaUsuario == 'pedra') {
        resultado = 'Você ganhou'
      } else if (escolhaUsuario == 'papel') {
        resultado = 'Você perdeu'
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => { this.jokenpo('pedra') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokenpo('papel') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.jokenpo('tesoura') }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
        </View>

      </View>
    );
  }
}

class Topo extends Component {
  render() {
    if (this.props.escolha == 'pedra') {
      return (
        <View style={styles.icone}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('./imgs/pedra.png')} />
        </View>
      );
    } else if (this.props.escolha == 'papel') {
      return (
        <View style={styles.icone}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('./imgs/papel.png')} />
        </View>
      );
    } else if (this.props.escolha == 'tesoura') {
      return (
        <View style={styles.icone}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('./imgs/tesoura.png')} />
        </View>
      );
    } else {
      return false;
    }
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20
  }
})

AppRegistry.registerComponent('app3PedraPapelTesoura', () => app3PedraPapelTesoura);
