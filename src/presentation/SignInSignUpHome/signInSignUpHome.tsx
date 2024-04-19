/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SignInSignUpHome = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-black`}>

      <View style={tw`h-60 items-center justify-center`}>
        <Image style={tw`w-142px h-58px`} source={require('../../assets/images/Layer_2.png')} />
      </View>

      <View style={tw`h-70 items-center justify-center mt-8 `}>
        <Text style={tw`text-white text-2xl mb-4`}>Welcome to Flickoo</Text>
        <Text style={tw`text-white text-sm text-center`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ligula eu
          consectetur congue.
        </Text>
      </View>

      <View style={tw`h-30 items-center justify-center justify-between p-2 m-2`}>
      <LinearGradient
          colors={['#ED1C24', '#FF9441']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={tw`rounded-xl w-340px h-40px items-center justify-center`}
        >
          <TouchableOpacity style={tw`w-full h-full items-center justify-center`} onPress={() => navigation.navigate('signup')} >
            <Text style={tw`text-white text-lg items-center justify-center`}>Signup</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['#ED1C24', '#FF9441']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={tw`rounded-xl w-340px h-40px items-center justify-center`}
        >
          <TouchableOpacity style={tw`w-full h-full items-center justify-center`} onPress={() => navigation.navigate('signin')} >
            <Text style={tw`text-white text-lg items-center justify-center`}>SignIn</Text>
          </TouchableOpacity>
        </LinearGradient>
    
      </View>
    </View>
  );
};

export default SignInSignUpHome;
