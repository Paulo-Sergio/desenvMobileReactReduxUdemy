import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default props => (
  <View style={styles.viewPrincipal}>
    <View style={styles.viewInputs}>
      <TextInput placeholder="Nome" style={styles.inputs} />
      <TextInput placeholder="E-mail" style={styles.inputs} />
      <TextInput placeholder="Senha" style={styles.inputs} />
    </View>
    <View style={styles.viewButton}>
      <Button title="Cadastrar" color="#115E54" onPress={() => false} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    padding: 10
  },
  viewInputs: {
    flex: 4,
    justifyContent: 'center'
  },
  inputs: {
    fontSize: 20,
    height: 45
  },
  viewButton: {
    flex: 1
  }
})