/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      const starImage =
        i <= filledStars
          ? require('../../assets/images/goldStar.png')
          : require('../../assets/images/emptyStar.png');

      stars.push(
        <Image
          key={i}
          source={starImage}
          style={{ width: 20, height: 20, margin: 5 }}
        />
      );
    }
    return stars;
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {renderStars()}
    </View>
  );
};

export default StarRating;
