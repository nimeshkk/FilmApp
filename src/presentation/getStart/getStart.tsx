/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const GetStartedPage = (props) => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <Image
        source={require('../../assets/images/getBG.png')}
        style={tw`absolute w-full h-full`}
        resizeMode="cover"
      />
      <View style={tw`absolute bottom-0 justify-end items-center w-full h-full bg-black bg-opacity-60`}/>


      <Image
        source={require('../../assets/images/Layer_2.png')}
        style={tw`w-40 h-40 mb-8 flex-1`}
        resizeMode="contain"
      />


      <View style={tw` p-4 rounded-md justify-center w-373px flex-1`}>
        <Text style={tw`text-white text-2xl text-center font-bold`}>Enjoy your favorite movie everywhere</Text>
        <Text style={tw`text-white text-center`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi hic et laborum ducimus repudiandae adipisci nam accusamus sunt odit aliquam voluptatem, deserunt voluptas nulla autem sapiente delectus quos, similique
        </Text>
      </View>

      <View style={tw` flex-1 justify-end`}>
      <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('signInSignUpHome')
      }
        style={tw`bg-red-600 text-white  rounded-2xl bottom-15  w-375px h-64px items-center justify-center`}
      >
        <Text style={tw`text-white text-xl`}>Get Started</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStartedPage;
