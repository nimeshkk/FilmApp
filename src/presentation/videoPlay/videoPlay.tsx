/* eslint-disable prettier/prettier */
import React  from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import CustomNavBar from '../navigationbar/navBar';

const VideoPlay = () => {

  const items = [
    { id: '1', name: 'Kathuru Mithuru', image: require('../../assets/images/film1.png') },
    { id: '2', name: 'Wisangamanay', image: require('../../assets/images/film2.png') },
    { id: '3', name: 'GajaMan', image: require('../../assets/images/film3.png') },
    { id: '4', name: 'The Newspaper', image: require('../../assets/images/film4.png') },
    { id: '5', name: 'Kubio', image: require('../../assets/images/film5.png') },
    { id: '6', name: 'Rahas Kiyana Kadu', image: require('../../assets/images/film6.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={tw`bg-black p-1  items-center `}>
      <Image source={item.image} style={tw`w-85px h-122px rounded-xl `} resizeMode="cover" />
      <Text style={tw`text-white  `}>{item.name}</Text>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-black`}>
       <View style={tw` w-full h-200px relative bg-black`}>
         <Image source={require('../../assets/images/video.png')} style={tw`flex-1`} resizeMode="cover" />
       </View>



       <View style={tw` bg-black  justify-between flex-row  `}>
              <Text style={tw`text-white text-xl font-bold ml-4 `}>Kathuru Mithuru </Text>
      </View>


      <View style={tw` bg-black  justify-between flex-row ml-4`}>
      <View style={tw`flex-row justify-between p-1 bg-black w-70 `}>

            <Text style={tw`bg-black text-white w-40px h-25px  items-center `}>2023</Text>

         <TouchableOpacity style={tw`bg-black text-white w-74px h-25px  items-center border border-white`}>
            <Text style={tw`text-white`}>Vision</Text>
         </TouchableOpacity>

         <TouchableOpacity style={tw`bg-black text-white w-54px h-25px  border items-center border-white`}>
            <Text style={tw`text-white`}>HD</Text>
         </TouchableOpacity>

          <TouchableOpacity style={tw`bg-black text-white w-74px h-25px  border items-center border-white`}>
             <Text style={tw`text-white`}>TV-MA</Text>
         </TouchableOpacity>
      </View>
              <Text style={tw`text-white text-sm justify-center items-center m-1`}>12K</Text>
      </View>

      <View style={tw` bg-black p-1  `}>
              <Text style={tw`text-white text-sm justify-center items-center m-1`}>Lorem ipsum dolor sitpiente dolores minus consequatur eligendi quos quas in. Omnis qui aspernatur maxime tempor</Text>
      </View>


      <View style={tw`bg-white bg-opacity-8 p-1 m-3 justify-center items-center `}>
              <Text style={tw`text-white text-sm justify-center items-center m-1`}>Your have 14 more dates remaining to watch this movie</Text>
      </View>




      <View style={tw` bg-black`}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderItem}
          style={tw`bg-black `}
        />

        <View style={tw`justify-between flex-row m-2`}>
          <Text style={tw`text-white text-xl`}>Previous Downloads</Text>
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
      <CustomNavBar/>
    </View>
  );
};

export default VideoPlay;
