import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator, createDrawerNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/icons/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };
  render () {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Report')}
        title="Go to notifications"
      />
    );
  }
}

export { Home };
