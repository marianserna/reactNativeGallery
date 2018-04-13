import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Form from './Form';
import ImageCard from './ImageCard';
import CardSection from './CardSection';

export default class ImagesContainer extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.fetchImages('giraffe');
  }

  fetchImages = async term => {
    const url = `https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&per_page=12&query=${term}`;
    const result = await axios.get(url);
    console.log(result);
    this.setState({ images: result.data.results });
  };

  render() {
    console.log(this.state);
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#F9CE00' }}>
        <Form fetchImages={this.fetchImages} />
        {this.state.images.map(image => (
          <ImageCard image={image} key={image.id} />
        ))}
      </ScrollView>
    );
  }
}
