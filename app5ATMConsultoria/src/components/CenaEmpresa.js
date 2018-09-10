import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheEmpresa = require('../imgs/detalhe_empresa.png')

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar
          backgroundColor='#EC7148'
        />

        <BarraNavegacao voltar={true} navigator={this.props.navigator} corDeFundo='#EC7148' />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtEmpresa}>
            A ATM Consultoria está no mercado a mais de 20 anos...
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    marginTop: 20,
    flexDirection: 'row'
  },
  txtTitulo: {
    fontSize: 30,
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25
  },
  detalheEmpresa: {
    padding: 20,
    marginTop: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
})