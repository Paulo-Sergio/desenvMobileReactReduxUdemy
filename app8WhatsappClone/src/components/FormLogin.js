import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class formLogin extends Component {

  _autenticarUsuario() {
    const { email, senha } = this.props
    this.props.autenticarUsuario({ email, senha })
  }

  renderBtnAcessar() {
    if (this.props.loading_login) {
      return (
        <ActivityIndicator size="large" />
      )
    }
    return (
      <Button
        title="Acessar"
        color='#115E54'
        onPress={() => this._autenticarUsuario()}
      />
    )
  }

  render() {
    return (
      <Image source={require('../imgs/bg.png')} style={{ flex: 1, width: null }}>
        <View style={styles.viewPrincipal}>
          <View style={styles.viewTopo}>
            <Text style={styles.titulo}>WhatsApp Clone</Text>
          </View>
          <View style={styles.viewInputs}>
            <TextInput
              value={this.props.email}
              onChangeText={texto => this.props.modificaEmail(texto)}
              style={styles.inputs}
              placeholder='E-mail'
              placeholderTextColor='#FFF'
            />
            <TextInput
              secureTextEntry
              value={this.props.senha}
              onChangeText={texto => this.props.modificaSenha(texto)}
              style={styles.inputs}
              placeholder='Senha'
              placeholderTextColor='#FFF'
            />
            <Text style={{ color: '#FF0000', fontSize: 18 }}>{this.props.erroLogin}</Text>
            <TouchableHighlight onPress={() => Actions.formCadastro()}>
              <Text style={{ fontSize: 20, color: '#FFF' }}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.viewButton}>
            {this.renderBtnAcessar()}
          </View>
        </View>
      </Image>
    );
  }
}

// mapear variavies de estado do redux, para props do componente
const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroLogin: state.AutenticacaoReducer.erroLogin,
    loading_login: state.AutenticacaoReducer.loading_login,
  }
)



export default connect(mapStateToProps, {
  modificaEmail, modificaSenha, autenticarUsuario
})(formLogin)

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
    fontSize: 25,
    color: '#FFF'
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