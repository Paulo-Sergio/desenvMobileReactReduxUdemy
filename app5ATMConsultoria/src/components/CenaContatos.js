import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheContatos = require('../imgs/detalhe_contato.png')

export default class CenaContatos extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar
          backgroundColor='#61BD8C'
        />

        <BarraNavegacao voltar={true} navigator={this.props.navigator} corDeFundo='#61BD8C' />

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={styles.detalheContato}>
          <Text style={styles.txtContato}>TEL: (81) 3035-0855</Text>
          <Text style={styles.txtContato}>CEL: (81) 99473-1534</Text>
          <Text style={styles.txtContato}>EMAIL: atm@consultorias.com</Text>
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
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25
  },
  detalheContato: {
    padding: 20,
    marginTop: 20
  },
  txtContato: {
    fontSize: 18
  }
})