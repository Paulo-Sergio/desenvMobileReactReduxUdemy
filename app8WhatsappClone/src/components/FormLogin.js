import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formLogin = (props) => {

  return (
    <View style={styles.viewPrincipal}>
      <View style={styles.viewTopo}>
        <Text style={styles.titulo}>WhatsApp Clone</Text>
      </View>
      <View style={styles.viewInputs}>
        <TextInput value={props.email} onChangeText={texto => props.modificaEmail(texto)} style={styles.inputs} placeholder='E-mail' />
        <TextInput secureTextEntry value={props.senha} onChangeText={texto => props.modificaSenha(texto)} style={styles.inputs} placeholder='Senha' />
        <TouchableHighlight onPress={() => Actions.formCadastro()}>
          <Text style={{ fontSize: 20 }}>Ainda não tem cadastro? Cadastre-se</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.viewButton}>
        <Button title="Acessar" color='#115E54' onPress={() => false} />
      </View>
    </View>
  );
}

// mapear variavies de estado do redux, para props do componente
const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)



export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin)

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    padding: 10
  },
  viewTopo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 25
  },
  viewInputs: {
    flex: 2
  },
  inputs: {
    fontSize: 20,
    height: 45
  },
  viewButton: {
    flex: 2
  }
})