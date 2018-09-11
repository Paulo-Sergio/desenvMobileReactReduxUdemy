import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

export default class Operacao extends Component {
  render() {
    return (
      <Picker style={styles.operacao}>
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
      </Picker>
    )
  }
}

const styles = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15
  }
})