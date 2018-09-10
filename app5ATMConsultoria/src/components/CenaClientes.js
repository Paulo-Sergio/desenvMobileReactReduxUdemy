import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheClientes = require('../imgs/detalhe_cliente.png')
const cliente1 = require('../imgs/cliente1.png')
const cliente2 = require('../imgs/cliente2.png')

export default class CenaClientes extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar
          backgroundColor='#B9C941'
        />

        <BarraNavegacao voltar={true} navigator={this.props.navigator} corDeFundo='#B9C941' />

        <View style={styles.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
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
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
})