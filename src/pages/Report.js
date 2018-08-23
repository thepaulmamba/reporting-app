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

class Report extends Component {
  static navigationOptions = {
    drawerLabel: 'Report',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/icons/tablet.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };
  render () {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go to notifications"
      />
    );
  }
}

export { Report };
