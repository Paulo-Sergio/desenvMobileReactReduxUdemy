import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'
import CenaContatos from './src/components/CenaContatos'
import CenaEmpresa from './src/components/CenaEmpresa'
import CenaServicos from './src/components/CenaServicos'

export default class app5ATMConsultoria extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'cenaPrincipal' }}
        renderScene={(route, navigator) => {

          switch (route.id) {
            case 'cenaPrincipal':
              return (<CenaPrincipal navigator={navigator} />)
            case 'cenaClientes':
              return (<CenaClientes navigator={navigator} />)
            case 'cenaContatos':
              return (<CenaContatos navigator={navigator} />)
            case 'cenaEmpresa':
              return (<CenaEmpresa navigator={navigator} />)
            case 'cenaServicos':
              return (<CenaServicos navigator={navigator} />)
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5ATMConsultoria', () => app5ATMConsultoria);
