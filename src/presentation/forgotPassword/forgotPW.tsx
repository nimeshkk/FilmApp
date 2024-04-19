/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Forgotpassword = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-black `}>
      <View style={tw`h-200px items-center justify-center`}>
        <Image style={tw`w-153.38px h-62.87px`} source={require('../../assets/images/Layer_2.png')} />
      </View>

      <View style={tw`h-300px p-2`}>
        <Text style={tw`text-white text-2xl mb-2`}>Get Your Code</Text>
        <View style={tw`items-center`}>
        <View style={tw`bg-white bg-opacity-8 rounded-xl p-1 mb-2 w-343px h-45px self-center relative flex-row items-center`}>
      <Image source={require('../../assets/images/profileText.png')} style={tw`mr-2 ml-2`} />
      <TextInput
        style={tw`text-white items-center `}
        placeholder="Enter Your Email"
        placeholderTextColor="#848484"
        />
      </View>
          <Text style={tw`text-white text-sm mt-2`}>
            *we will send you a message to set or reset your new password
          </Text>
        </View>
      </View>

      <View style={tw`flex-1 items-center justify-center`}>
      <LinearGradient
      colors={['#ED1C24', '#FF9441']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={tw`rounded-xl w-340px h-40px items-center justify-center`}
    >
      <TouchableOpacity style={tw`w-full h-full items-center justify-center`} onPress={() => navigation.navigate('OTP')}>
        <Text style={tw`text-white text-lg items-center justify-center`}>Send Code</Text>
      </TouchableOpacity>
    </LinearGradient>
      </View>
    </View>
  );
};

export default Forgotpassword;
