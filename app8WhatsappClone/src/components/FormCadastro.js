import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

const formCadastro = (props) => (
  <View style={styles.viewPrincipal}>
    <View style={styles.viewInputs}>
      <TextInput value={props.nome} placeholder="Nome" style={styles.inputs} />
      <TextInput value={props.email} placeholder="E-mail" style={styles.inputs} />
      <TextInput value={props.senha} placeholder="Senha" style={styles.inputs} />
    </View>
    <View style={styles.viewButton}>
      <Button title="Cadastrar" color="#115E54" onPress={() => false} />
    </View>
  </View>
);

// mapear variavies de estado do redux, para props do componente
const mapStateToProps = (state) => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, null)(formCadastro)

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