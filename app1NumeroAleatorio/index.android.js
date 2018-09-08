/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

const geraNumeroAleatorio = () => {
  let numeroAleatorio = Math.random()

  numeroAleatorio = Math.floor(numeroAleatorio * 100)
  alert(numeroAleatorio)
}

const app1NumeroAleatorio = () => {
  return (
    <View>
      <Text>Gerador de número randômicos!!!</Text>
      <Button
        title="Gerar um número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
}

AppRegistry.registerComponent('app1NumeroAleatorio', () => app1NumeroAleatorio);
