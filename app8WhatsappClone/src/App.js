import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBVeP2VBD9oiYpz2CgkkIRATjpKJoYD7dg",
      authDomain: "whatsapp-clone-6c688.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-6c688.firebaseio.com",
      projectId: "whatsapp-clone-6c688",
      storageBucket: "whatsapp-clone-6c688.appspot.com",
      messagingSenderId: "788669914999"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
