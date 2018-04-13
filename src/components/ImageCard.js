import React from 'React';
import { Image, Linking } from 'react-native';

import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';

const ImageCard = ({ image }) => {
  return (
    <Card>
      <CardSection>
        <Image
          source={{ uri: image.urls.small }}
          style={{ flex: 1, height: 300 }}
        />
      </CardSection>

      <CardSection>
        <Button
          onPress={() =>
            Linking.openURL(image.urls.full).catch(err =>
              console.error('An error occurred', err)
            )
          }
        >
          See Image
        </Button>
      </CardSection>
    </Card>
  );
};

export default ImageCard;
