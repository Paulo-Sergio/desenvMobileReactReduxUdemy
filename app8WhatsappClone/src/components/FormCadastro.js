import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {
  constructor(props) {
    super(props)
  }

  _cadastraUsuario() {
    const nome = this.props.nome
    const email = this.props.email
    const senha = this.props.senha

    this.props.cadastraUsuario({ nome, email, senha })
  }

  render() {
    return (
      <Image source={require('../imgs/bg.png')} style={{ flex: 1, width: null }}>
        <View style={styles.viewPrincipal}>
          <View style={styles.viewInputs}>
            <TextInput
              value={this.props.nome}
              onChangeText={texto => props.modificaNome(texto)} placeholder="Nome"
              style={styles.inputs}
              placeholderTextColor='#FFF'
            />
            <TextInput
              value={this.props.email}
              onChangeText={texto => props.modificaEmail(texto)}
              placeholder="E-mail"
              style={styles.inputs}
              placeholderTextColor='#FFF'
            />
            <TextInput
              secureTextEntry
              value={this.props.senha}
              onChangeText={texto => props.modificaSenha(texto)}
              placeholder="Senha"
              style={styles.inputs}
              placeholderTextColor='#FFF'
            />

            <Text style={{ color: '#FF0000', fontSize: 18 }}>{this.props.erroCadastro}</Text>
          </View>
          <View style={styles.viewButton}>
            <Button
              title="Cadastrar"
              color="#115E54"
              onPress={() => this._cadastraUsuario()}
            />
          </View>
        </View>
      </Image>
    );
  }
}


// mapear variavies de estado do redux, para props do componente
const mapStateToProps = (state) => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro
  }
)

export default connect(
  mapStateToProps,
  {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
  }
)(formCadastro)

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