/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import tw from 'twrnc';
import CustomNavBar from '../navigationbar/navBar';

const HomeScreen = () => {
  const images = [
    require('../../assets/images/film1.png'),
    require('../../assets/images/film1.png'),
    require('../../assets/images/film1.png'),
  ];

  const [selectedButton, setSelectedButton] = useState('All');

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  const items = [
    { id: '1', name: 'Kathuru Mithuru', image: require('../../assets/images/film1.png') },
    { id: '2', name: 'Wisangamanay', image: require('../../assets/images/film2.png') },
    { id: '3', name: 'GajaMan', image: require('../../assets/images/film3.png') },
    { id: '4', name: 'The Newspaper', image: require('../../assets/images/film4.png') },
    { id: '5', name: 'Kubio', image: require('../../assets/images/film5.png') },
    { id: '6', name: 'Rahas Kiyana Kadu', image: require('../../assets/images/film6.png') },

  ];

  const renderItem = ({ item }) => (
    <View style={tw`bg-black p-2 m-1 items-center justify-center`}>
      <Image source={item.image} style={tw`w-94px h-132px rounded-xl `} resizeMode="cover" />
      <Text style={tw`text-white items-center justify-center`}>{item.name}</Text>
    </View>
  );

  return (
    <View style={tw`flex-1`}>
      <Swiper showsButtons={false} autoplay={true} autoplayTimeout={3}>
        {images.map((image, index) => (
          <View key={index} style={tw`h-350px w-full relative`}>
            <Image source={image} style={tw`h-350px w-full`} resizeMode="cover" />
            <View style={tw`absolute bottom-0 p-4 justify-end items-center w-full h-full bg-black bg-opacity-60`}>
              <Text style={tw`text-white text-4xl font-bold bottom-10`}>Kathuru Mithuru </Text>
              <Text style={tw`text-white text-sm justify-center items-center bottom-10`}>Lorem ipsum dolor sit amet consectetur voluptatem eligendi, ad accusamus, labore magni laboriosam delectus fugiat quae.</Text>
            </View>
          </View>
        ))}
      </Swiper>


      <View style={tw`bg-black p-1`}>
        <View style={tw`flex-row justify-between p-1 bg-black `}>
          <TouchableOpacity
            style={tw`bg-${selectedButton === 'All' ? 'red-600 ' : 'black'} text-white py-2 px-3 rounded-2xl border border-${selectedButton === 'All' ? 'red-500' : 'white'}`}
            onPress={() => handleButtonPress('All')}
          >
            <Text style={tw`text-white`}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-${selectedButton === 'Most popular' ? 'red-600' : 'black'} text-white py-2 px-3 rounded-2xl border border-${selectedButton === 'Most popular' ? 'red-500' : 'white'}`}
            onPress={() => handleButtonPress('Most popular')}
          >
            <Text style={tw`text-white`}>Most popular</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-${selectedButton === 'Most View' ? 'red-600' : 'black'} text-white py-2 px-3 rounded-2xl border border-${selectedButton === 'Most View' ? 'red-500' : 'white'}`}
            onPress={() => handleButtonPress('Most View')}
          >
            <Text style={tw`text-white`}>Most View</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-${selectedButton === 'Top Rated' ? 'red-600' : 'black'} text-white py-2 px-3 rounded-2xl border border-${selectedButton === 'Top Rated' ? 'red-500' : 'white'}`}
            onPress={() => handleButtonPress('Top Rated')}
          >
            <Text style={tw`text-white`}>Top Rated</Text>
          </TouchableOpacity>
        </View>
        </View>


       <View style={tw` bg-black  h-350px`}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={renderItem}
        style={tw`bg-black `}
      />

       <View style={tw`justify-between flex-row m-2`}>
       <Text style={tw`text-white text-xl`}>Romance</Text>
       <Text style={tw`text-yellow-400 text-xl`}>See All</Text>
       </View>

       <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={renderItem}
        style={tw`bg-black `}
      />
      </View>
      <CustomNavBar />
    </View>
  );
};

export default HomeScreen;
