/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import CustomNavBar from '../navigationbar/navBar';
import LinearGradient from 'react-native-linear-gradient';

const DownloadedListPage = () => {



    const items = [
          { id: '1', name: 'Kathuru Mithuru', image: require('../../assets/images/film1.png'), price: '$19.99', description: 'A great Highly recommended item for your collection.', time: '2h 30m' },
          { id: '2', name: 'Wisargamanaya', image: require('../../assets/images/film2.png'), price: '$24.99', description: 'Highly recommended for movie enthusiasts.', time: '1h 45m' },
          { id: '3', name: 'GajaMan', image: require('../../assets/images/film3.png'), price: '$14.99', description: 'Limited edition with special features.', time: '2h 10m' },
       ];

    const renderItem = ({ item }) => (
      <View style={tw`flex-row  items-center border-b border-white`}>
        <Image source={item.image} style={tw`w-101px h-140px rounded-md`} resizeMode="cover" />
        <View style={tw`flex-col ml-4 w-240px h-150px p-4 m-4 justify-between`}>
          <Text style={tw`text-lg font-bold text-white`}>{item.name}</Text>
          <Text style={tw`text-yellow-500`}>{item.time}</Text>
          <Text style={tw`text-white`}>{item.description}</Text>
          <LinearGradient
              colors={['#ED1C24', '#FF9441']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={tw`rounded-xl w-113px h-24px items-center justify-center`}
          >
          <TouchableOpacity style={tw`w-full h-full items-center justify-center`}>
          <Text style={tw`text-white text-sm items-center justify-center`}>Watch Now</Text>
          </TouchableOpacity>
         </LinearGradient>
        </View>
      </View>
    );
  
    return (
      <View style={tw`flex-1 p-4 bg-black`}>
  
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={1}
        />
        <CustomNavBar />
      </View>
    );
  };

export default DownloadedListPage;
