/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';



const CustomNavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-row bg-black p-2 justify-between items-center  `}>

      <TouchableOpacity style={tw`flex-row items-center`} onPress={() => navigation.navigate('HomePage')}
      >
        <Image source={require('../../assets/images/navHome.png')} style={tw`w-6 h-6`} resizeMode="contain" />
      </TouchableOpacity>



      <TouchableOpacity style={tw`flex-row items-center`}  onPress={() => navigation.navigate('Videoplay')}
      >
        <Image source={require('../../assets/images/navPlay.png')} style={tw`w-6 h-6`} resizeMode="contain" />
      </TouchableOpacity>



      <TouchableOpacity style={tw`flex-row items-center bg-red-500 rounded-full w-15 h-15 items-center justify-center`} onPress={() => navigation.navigate('MostPopular')}>
        <Image source={require('../../assets/images/navCenter.png')} style={tw`w-10 h-10`} resizeMode="contain" />
      </TouchableOpacity>


      <TouchableOpacity style={tw`flex-row items-center`} onPress={() => navigation.navigate('SearchList')}
      >
        <Image source={require('../../assets/images/navSearch.png')} style={tw`w-6 h-6`} resizeMode="contain" />
      </TouchableOpacity>


      <TouchableOpacity style={tw`flex-row items-center`} onPress={() => navigation.navigate('Download')}
      >
        <Image source={require('../../assets/images/navDownload.png')} style={tw`w-6 h-6`} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomNavBar;

