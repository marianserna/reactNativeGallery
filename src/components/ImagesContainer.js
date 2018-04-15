import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Form from './Form';
import ImageCard from './ImageCard';
import CardSection from './CardSection';

import { fetchImages } from '../actions';

class ImagesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchImages('giraffe');
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#F9CE00' }}>
        <Form />
        {this.props.images.map(image => (
          <ImageCard image={image} key={image.id} />
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { images } = state;

  return { images };
};

export default connect(mapStateToProps, { fetchImages })(ImagesContainer);
