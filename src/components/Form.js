import React from 'react';
import { View } from 'react-native';

import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';

export default class Form extends React.Component {
  state = {
    term: ''
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardSection>
          <Input
            value={this.state.term}
            label="Search"
            placeholder="Giraffe"
            onChangeText={value => this.setState({ term: value })}
          />
        </CardSection>
        <Button
          onPress={() => {
            this.props.fetchImages(this.state.term);
          }}
        >
          SEARCH
        </Button>
      </View>
    );
  }
}
