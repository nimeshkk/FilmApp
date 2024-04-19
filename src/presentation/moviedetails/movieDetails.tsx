/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import tw from 'twrnc';
import CustomNavBar from '../navigationbar/navBar';
import StarRating from '../moviedetails/starRating';


const MovieDetails = () => {
  const images = [
    require('../../assets/images/film1.png'),
    require('../../assets/images/film1.png'),
    require('../../assets/images/film1.png'),
  ];

  const [selectedButton, setSelectedButton] = useState('Play Now');

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
      <Image source={item.image} style={tw`w-95px h-132px rounded-xl `} resizeMode="cover" />
      <Text style={tw`text-white items-center justify-center`}>{item.name}</Text>
    </View>
  );

  return (
    
    <View style={tw`flex-1`}>
      <View style={tw`flex-1`}>
          <Image source={images[0]} style={tw`flex-1 w-full`} resizeMode="cover" />
         <View style={tw`absolute bottom-0 p-4 justify-end items-center w-full h-full bg-black bg-opacity-60`}>
        </View>
      </View>
      <View style={tw`bg-black `}>
        <StarRating rating={5} />
      </View>

      <View style={tw` bg-black p-1 justify-between flex-row `}>
              <Text style={tw`text-white text-2xl font-bold m-1 `}>Kathuru Mithuru </Text>
              <Text style={tw`text-white text-2xl justify-center items-center m-1`}>$2.00</Text>
      </View>

      <View style={tw` bg-black p-1 justify-between flex-row `}>
      <View style={tw`flex-row justify-between p-1 bg-black w-60 `}>
         <TouchableOpacity style={tw`bg-black text-white w-64px h-25px rounded-xl items-center border border-white`}>
            <Text style={tw`text-white items-center justify-center`}>Drama</Text>
         </TouchableOpacity>

         <TouchableOpacity style={tw`bg-black text-white w-74px h-25px rounded-xl border items-center border-white`}>
            <Text style={tw`text-white items-center justify-center`}>Comedy</Text>
         </TouchableOpacity>

          <TouchableOpacity style={tw`bg-black text-white w-74px h-25px rounded-xl border items-center border-white`}>
             <Text style={tw`text-white items-center justify-center`}>Action</Text>
         </TouchableOpacity>
      </View>
              <Text style={tw`text-white text-sm justify-center items-center m-1`}>Startting from</Text>
      </View>




      <View style={tw` bg-black p-1 `}>
              <Text style={tw`text-white text-sm justify-center items-center m-1`}>Lorem ipsum dolore magni laboriosam delectus fugiat quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum reprehenderit illum sapiente dolores minus consequatur eligendi quos quas in. Omnis qui aspernatur maxime tempor</Text>
      </View>

      <View style={tw`bg-black p-1`}>

        <View style={tw`flex-row justify-between p-1 bg-black w-70 `}>
          <TouchableOpacity
            style={tw`items-center justify-center bg-${selectedButton === 'Watch Trailer' ? 'red-600 ' : 'black'} text-white w-129px h-29px rounded-2xl border border-${selectedButton === 'Watch Trailer' ? 'red-500' : 'white'}`}
            onPress={() => handleButtonPress('Watch Trailer')}
          >
            <Text style={tw`text-white `}>Watch Trailer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`items-center justify-center bg-${selectedButton === 'Play Now' ? 'red-600' : 'black'} text-white w-129px h-29px rounded-2xl border border-${selectedButton === 'Play Now' ? 'red-500' : 'white'}`}
            onPress={() => handleButtonPress('Play Now')}
          >
            <Text style={tw`text-white`}>Play Now</Text>
          </TouchableOpacity>

        </View>
        </View>


       <View style={tw` bg-black flex-0.8 `}>


       <View style={tw`justify-between flex-row m-2`}>
       <Text style={tw`text-white text-xl`}>Recently View</Text>
       <Text style={tw`text-yellow-400 text-xl`}>See All</Text>
       </View>
       <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={renderItem}
        style={tw`bg-black flex-2 `}
      />
      </View>
      <CustomNavBar />
    </View>
  );
};

export default MovieDetails;