import React, { Component } from 'react'
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { modificaMensagem, enviarMensagem } from '../actions/AppActions'

class Conversa extends Component {

  _enviarMensagem() {
    /**
     * mensagem = vem do mapStateToProps
     * contatoNome e contatoEmail = vem da cena anterior como parametro do router-flux
     */
    const { mensagem, contatoNome, contatoEmail } = this.props

    this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
        <View style={{ flex: 1, paddingBottom: 20 }}></View>
        <View style={{ flexDirection: "row", height: 60 }}>
          <TextInput
            value={this.props.mensagem}
            onChangeText={texto => this.props.modificaMensagem(texto)}
            style={{ flex: 4, backgroundColor: '#FFF', fontSize: 18 }}
          />

          <TouchableHighlight onPress={this._enviarMensagem.bind(this)} underlayColor="#FFF">
            <Image source={require('../imgs/enviar_mensagem.png')} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    mensagem: state.AppReducer.mensagem
  }
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem })(Conversa)