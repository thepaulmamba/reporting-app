import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from '../components/common';
import { connect } from 'react-redux';

import * as actionCreators from '../store/action-creators';

class SignIn extends Component {
  static navigationOptions = {
    headerTitle: 'SIGN IN'
  };
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: null, loading: false };
  }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ errorMessage: '', loading: true });
    this.props.dispatch(actionCreators.signIn(email, password));
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

const mapStateToProps = state => {
  return {
    session: state.session
  }
};

export default connect(mapStateToProps)(SignIn);
