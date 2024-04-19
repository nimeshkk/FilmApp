/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';


const OTPVerificationSuccess = () => {
  return (
    <View style={tw`flex-1 bg-black justify-between p-4`}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Image style={tw`w-153.38px h-62.87px`} source={require('../../assets/images/Layer_2.png')} />
      </View>

      <View style={tw`flex-1 items-center justify-center`}>
        <Image style={tw`w-32 h-32`} source={require('../../assets/images/tick.png')} />
      </View>

      <View style={tw`flex-2 items-center`}>
        <Text style={tw`text-white text-2xl mb-2`}>Verification Successful</Text>
        <Text style={tw`text-white`}>Your account has been successfully verified!</Text>
      </View>

      <View style={tw`flex-1 items-center justify-center`}>
        <TouchableOpacity style={tw`bg-red-500 rounded-2xl p-4 w-90% items-center`}>
          <Text style={tw`text-white text-lg`}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPVerificationSuccess;
