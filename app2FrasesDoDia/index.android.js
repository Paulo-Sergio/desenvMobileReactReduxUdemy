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
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio * 10)

  // frases
  let frases = Array();
  frases[0] = 'Frase de impacto 1'
  frases[1] = 'Frase de impacto 2'
  frases[2] = 'Frase de impacto 3'
  frases[3] = 'Frase de impacto 4'
  frases[4] = 'Frase de impacto 5'
  frases[5] = 'Frase de impacto 6'
  frases[6] = 'Frase de impacto 7'
  frases[7] = 'Frase de impacto 8'
  frases[8] = 'Frase de impacto 9'
  frases[9] = 'Frase de impacto 10'

  let fraseEscolhida = frases[numeroAleatorio]

  // alert(fraseEscolhida);
  Alert.alert(fraseEscolhida)
}

// Criar o component
const app2FrasesDoDia = () => {
  const { principal, botao, textoBotao } = Estilos

  return (
    <View style={principal}>

      <Image source={require('./imgs/logo.png')} />

      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>

    </View>
  );
}

// Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('app2FrasesDoDia', () => app2FrasesDoDia);
