import React from 'react';
import { View, Image, Text, Button } from 'react-native';

export default (props) => (
  <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>

    <View style={{ flex: 1, padding: 15 }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: '#FFF' }}>Seja Bem-Vindo</Text>
        <Image source={require('../imgs/logo.png')} />
      </View>

      <View style={{ flex: 1 }}>
        <Button title="Fazer Login" onPress={() => false} />
      </View>
    </View>

  </Image>
)