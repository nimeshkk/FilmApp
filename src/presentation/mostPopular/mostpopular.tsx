/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import tw from 'twrnc';
import CustomNavBar from '../navigationbar/navBar';

const MostPopular = () => {

  const items = [
    { id: '1', name: 'Kathuru Mithuru', image: require('../../assets/images/film1.png') },
    { id: '2', name: 'Wisangamanay', image: require('../../assets/images/film2.png') },
    { id: '3', name: 'GajaMan', image: require('../../assets/images/film3.png') },
    { id: '4', name: 'The Newspaper', image: require('../../assets/images/film4.png') },
    { id: '5', name: 'Kubio', image: require('../../assets/images/film5.png') },
    { id: '6', name: 'Rahas Kiyana Kadu', image: require('../../assets/images/film6.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={tw`bg-black p-2 m-1 `}>
      <Image source={item.image} style={tw`w-101px h-142px rounded-xl `} resizeMode="cover" />
      <Text style={tw`text-white`}>{item.name}</Text>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-black`}>
      <ScrollView contentContainerStyle={tw`bg-black p-4`}>
        <Text style={tw`text-white text-2xl bg-black p-3 ml-2`}>Most popular</Text>

        <View style={tw`justify-between flex-row m-2`}>
          <Text style={tw`text-white text-xl`}>Romance</Text>
          <Text style={tw`text-yellow-400 text-xl`}>See All</Text>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderItem}
          style={tw`bg-black flex-2`}
        />

        <View style={tw`justify-between flex-row m-2`}>
          <Text style={tw`text-white text-xl`}>Action</Text>
          <Text style={tw`text-yellow-400 text-xl`}>See All</Text>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderItem}
          style={tw`bg-black flex-2`}
        />
        <View style={tw`justify-between flex-row m-2`}>
          <Text style={tw`text-white text-xl`}>Drama</Text>
          <Text style={tw`text-yellow-400 text-xl`}>See All</Text>
        </View>

     <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={renderItem}
      style={tw`bg-black flex-2`}
    />

     <View style={tw`justify-between flex-row m-2`}>
        <Text style={tw`text-white text-xl`}>Comedy</Text>
        <Text style={tw`text-yellow-400 text-xl`}>See All</Text>
     </View>

     <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={renderItem}
      style={tw`bg-black flex-2`}
    />
      </ScrollView>
      <CustomNavBar />
    </View>
  );
};

export default MostPopular;
