import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) => (
  <View style={styles.topo}>
    <Text style={styles.txtTitulo}>Cabeçalho 1.0</Text>
  </View>
)

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center'
  },
  txtTitulo: {
    color: '#FFF',
    fontSize: 25
  }
})