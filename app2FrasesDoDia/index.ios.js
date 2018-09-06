/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Import
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

// Formatações
const Estilos = {
  principal: {
    backgroundColor: '#538530',
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

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  // frases
  let frases = Array();
  frases[0] = 'Frase de impacto 1';
  frases[1] = 'Frase de impacto 2';
  frases[2] = 'Frase de impacto 3';
  frases[3] = 'Frase de impacto 4';
  frases[4] = 'Frase de impacto 5';

  let fraseEscolhida = frases[numeroAleatorio];

  // alert(fraseEscolhida);
  Alert.alert(fraseEscolhida);
}

// Criar o component
const App = () => {
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
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('app2FrasesDoDia', () => App);
