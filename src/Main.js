import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator, SwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { Home, Report, SignIn } from './pages';

const Authenticated = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Report: {
    screen: Report
  },
});

const UnAuthenticated = StackNavigator({
  SignIn: {
    screen: SignIn,
    headerTitle: 'Sign In'
  }
});

class Main extends Component {
  constructor (props) {
    super(props);
  }
  login () {
    // console.log(this.props.session);
    // this.props.login();
  }
  render () {
    return this.props.session.token
      ? (<Authenticated />)
      : (<UnAuthenticated />);
  }
}

const mapStateToProps = state => {
  return {
    session: state.session
  }
};

export default connect(mapStateToProps)(Main);
