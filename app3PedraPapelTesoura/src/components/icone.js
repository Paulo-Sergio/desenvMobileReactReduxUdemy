import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const imgPedra = require('../../imgs/pedra.png')
const imgPapel = require('../../imgs/papel.png')
const imgTesoura = require('../../imgs/tesoura.png')

export default class Icone extends Component {
  render() {
    if (this.props.escolha === 'pedra') {
      return (
        <View style={styles.icone}>
          <Text>{this.props.jogador}</Text>
          <Image source={imgPedra} />
        </View>
      );
    } else if (this.props.escolha === 'papel') {
      return (
        <View style={styles.icone}>
          <Text>{this.props.jogador}</Text>
          <Image source={imgPapel} />
        </View>
      );
    } else if (this.props.escolha === 'tesoura') {
      return (
        <View style={styles.icone}>
          <Text>{this.props.jogador}</Text>
          <Image source={imgTesoura} />
        </View>
      );
    }

    return false
  }
}

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginBottom: 20
  }
})
