import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

import store from './store';
import ImagesContainer from './components/ImagesContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.outerContainer}>
          <Text style={styles.text}>Animal Gallery</Text>
          <ImagesContainer />
        </View>
      </Provider>
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
