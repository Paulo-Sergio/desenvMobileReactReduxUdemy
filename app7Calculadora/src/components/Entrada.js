import React from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './Numero'

export default (props) => (
  <View style={styles.numero}>
    <Numero />
    <Numero />
  </View>
)

const styles = StyleSheet.create({
  numero: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})