import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';

import { fetchImages, textChange } from '../actions';

class Form extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardSection>
          <Input
            value={this.props.term}
            label="Search"
            placeholder="Giraffe"
            onChangeText={this.props.textChange}
          />
        </CardSection>
        <Button
          onPress={() => {
            this.props.fetchImages(this.props.term);
            console.log(this.props.term);
          }}
        >
          SEARCH
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { term } = state;

  return { term };
};

export default connect(mapStateToProps, { fetchImages, textChange })(Form);
