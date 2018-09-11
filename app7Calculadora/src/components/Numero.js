import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default (props) => (
  <TextInput style={styles.numero} />
)

const styles = StyleSheet.create({
  numero: {
    width: 140,
    height: 80,
    fontSize: 20
  }
})
