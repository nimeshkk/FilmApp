/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import tw from 'twrnc';
import CustomNavBar from '../navigationbar/navBar';
import LinearGradient from 'react-native-linear-gradient';

const SearchListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); 

  // Sample data for items
  const items = [
    { id: '1', name: 'Kathuru Mithuru', image: require('../../assets/images/film1.png'), price: '$19.99', description: 'A great Highly recommended item for your collection.', time: '2h 30m' },
    { id: '2', name: 'Wisargamanaya', image: require('../../assets/images/film2.png'), price: '$24.99', description: 'Highly recommended for movie enthusiasts.', time: '1h 45m' },
    { id: '3', name: 'GajaMan', image: require('../../assets/images/film3.png'), price: '$14.99', description: 'Limited edition with special features.', time: '2h 10m' },
    { id: '4', name: 'The Newspaper', image: require('../../assets/images/film4.png'), price: '$29.99', description: 'Experience the thrill with this exclusive item.', time: '2h 15m' },
    { id: '5', name: 'Kuubio', image: require('../../assets/images/film5.png'), price: '$17.99', description: 'Perfect for a movie night at home.', time: '1h 50m' },
    { id: '6', name: 'Rahas Kiyana Kadu', image: require('../../assets/images/film6.png'), price: '$22.99', description: 'An essential addition to your film collection.', time: '2h 5m' },
  ];

  const renderItem = ({ item }) => (
    <View style={tw`flex-row items-center justify-between border-b border-white p-4`}>
      <View style={tw`flex-row items-center`}>
        <Image source={item.image} style={tw`w-101px h-140px rounded-md`} resizeMode="cover" />
        <View style={tw`flex-col ml-4 w-240px h-150px justify-between`}>
          <View style={tw`flex-row items-center justify-between `}>
            <Text style={tw`text-lg font-bold text-white`}>{item.name}</Text>
            <View style={tw`flex-row `}>
              <TouchableOpacity>
                <Image source={require('../../assets/images/premium.png')} style={tw`w-5 h-5 `} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assets/images/heart.png')} style={tw`w-5 h-5 ml-2`} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={tw`text-yellow-500`}>{item.time}</Text>
          <Text style={tw`text-white`}>{item.description}</Text>
          <LinearGradient
            colors={['#ED1C24', '#FF9441']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={tw`rounded-xl w-113px h-24px items-center justify-center`}
          >
            <TouchableOpacity
              style={tw`w-full h-full items-center justify-center`}
              onPress={() => {
                if (item.id === '1') {
                  navigation.navigate('TicketOption');
                }
              }}
            >
              <Text style={tw`text-white text-sm items-center justify-center`}>Watch Now</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-black`}>
      <Image
        source={require('../../assets/images/search.png')}
        style={tw`absolute right-4 mt-4  w-6 h-6`}
      />
      <TextInput
        style={tw`h-12 bg-white bg-opacity-15 rounded-md text-white m-2`}
        placeholder="Search Movie By Name"
        placeholderTextColor="#848484"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
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

export default SearchListPage;
