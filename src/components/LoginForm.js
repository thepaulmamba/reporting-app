import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: null, loading: false };
  }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ errorMessage: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(this.onSignup.bind(this))
    .then(this.onLoginSuccess.bind(this))
    .catch(this.onLoginFailed.bind(this));
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      errorMessage: null,
      loading: false
    });
  }
  onLoginFailed() {
    this.setState({ errorMessage: 'Authentication Failed', loading: false });
  }
  onSignup() {
    const { email, password } = this.state;
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'user@domain.com'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label={'Password'}
            placeholder={'password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        { this.state.errorMessage ? <Text style={styles.errorTextStyle}>{this.state.errorMessage}</Text> : null }
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
