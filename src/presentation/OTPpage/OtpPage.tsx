/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const OTP = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-black justify-between `}>
      <View style={tw`flex-1 items-center justify-center `}>
        <Image style={tw`w-153.38px h-62.87px`} source={require('../../assets/images/Layer_2.png')} />
      </View>

      <View style={tw`flex-2 p-2`}>
        <Text style={tw`text-white text-2xl mb-2`}>Enter Your Code</Text>
        <View style={tw`items-center`}>
          <Text style={tw`text-white`}>Please enter the 4-digit code that was sent to your email</Text>

          <View style={tw`flex-row  w-90% h-80px mt-10   justify-between`}>
            <TextInput
              style={tw`bg-white bg-opacity-8 rounded-xl p-2 w-68px text-white text-center`}
              placeholder="_"
              placeholderTextColor="#848484"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={tw`bg-white bg-opacity-8 rounded-xl p-2 w-68px text-white text-center`}
              placeholder="_"
              placeholderTextColor="#848484"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={tw`bg-white bg-opacity-8 rounded-xl p-2 w-68px text-white text-center`}
              placeholder="_"
              placeholderTextColor="#848484"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={tw`bg-white bg-opacity-8 rounded-xl p-2 w-68px text-white text-center`}
              placeholder="_"
              placeholderTextColor="#848484"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        </View>
      </View>

    <View style={tw`flex-1 items-center justify-center`}>
    <LinearGradient
      colors={['#ED1C24', '#FF9441']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={tw`rounded-xl w-340px h-40px items-center justify-center`}
    >
      <TouchableOpacity style={tw`w-full h-full items-center justify-center`} onPress={() => navigation.navigate('NewPassword')}>
        <Text style={tw`text-white text-lg items-center justify-center`}>Submit</Text>
      </TouchableOpacity>
    </LinearGradient>
    </View>

    </View>
  );
};

export default OTP;
