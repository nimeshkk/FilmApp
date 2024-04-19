/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';

const Splash = ({ navigation }) => {

  useEffect(() => {
    const navigateToSignIn = setTimeout(() => {
      navigation.navigate('GetStart');
    }, 2000);
    return () => clearTimeout(navigateToSignIn);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#ED1C24', '#FF9441']}
      style={tw`flex-1`}
    >
      <View style={tw`flex-1 mt-187px items-center`}>
        <Image
          style={tw`w-177.776px h-72.87px`}
          source={require('../../assets/images/Layer_1.png')}
        />
      </View>
      <View style={tw`flex-1 p-4 items-center justify-end`}>
        <Text style={tw`text-white text-lg`}>Version 1.0</Text>
      </View>
    </LinearGradient>
  );
};

export default Splash;


