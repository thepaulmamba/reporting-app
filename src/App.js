import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store/app.store';

import { Home, Report } from './pages';
import devtools from './Devtools.js';
import Main from './Main';

class App extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
