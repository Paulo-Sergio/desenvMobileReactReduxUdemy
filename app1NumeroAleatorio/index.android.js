/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const geraNumeroAleatorio = () => {
  let numeroAleatorio = Math.random()

  numeroAleatorio = Math.floor(numeroAleatorio * 10)
  alert(numeroAleatorio)
}

const App = () => {
  return (
    <View>
      <Text>Gerador de número randômicos!!!</Text>
      <Button
        title="Gerar um número randômico"
        onPress="{geraNumeroAleatorio}"
      />
    </View>
  )
}

AppRegistry.registerComponent('app1', () => App);
