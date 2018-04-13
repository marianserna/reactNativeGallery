import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

styles = {
  outerContainer: {
    flex: 1,
    height: 50,
    paddingTop: 50,
    backgroundColor: '#EEEEEE'
  }
};
