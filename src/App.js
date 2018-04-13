import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ImagesContainer from './components/ImagesContainer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <Text style={styles.text}>Animal Gallery</Text>
        <ImagesContainer />
      </View>
    );
  }
}

styles = {
  outerContainer: {
    flex: 1,
    height: 50,
    paddingTop: 35,
    backgroundColor: '#EEEEEE'
  },
  text: {
    fontSize: 20,
    color: 'blue',
    color: '#A94CAF',
    textAlign: 'center',
    paddingBottom: 10
  }
};
