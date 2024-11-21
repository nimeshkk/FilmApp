/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import CustomNavBar from '../navigationbar/navBar';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 

const PaymentSuccess = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1  bg-black`}>
      <View style={tw`flex-2 items-center justify-center`}>
      <Image style={tw` w-180px h-180px`} source={require('../../assets/images/tick.png')} />
      </View>

      <View style={tw`flex-1 `}>
      <Text style={tw`text-white text-2xl text-center`}>Payment Successful</Text>
      <Text style={tw`text-white mt-2 text-center`}>Thank you for your purchase!</Text>
      <Text style={tw`text-white mt-2 text-center`}>Transaction ID: 123456</Text>
      </View>


      <View style={tw`border-b border-white  w-90 m-2`}/>

    <View style={tw`mt-2 flex-1 flex-row justify-between m-2`}>
    <Text style={tw`text-white text-lg`}>Amount Paid</Text>
    <Text style={tw`text-xl font-bold text-white `}>$ 2.00</Text>
    </View>

      <View style={tw`flex-1 justify-center items-center  mt-4`}>
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
      <CustomNavBar />
    </View>
  );
};

export default PaymentSuccess;
