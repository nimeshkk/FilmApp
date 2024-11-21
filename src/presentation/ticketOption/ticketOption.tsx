/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import CustomNavBar from '../navigationbar/navBar';
import { useNavigation } from '@react-navigation/native';

const TicketOption = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (price) => {
    setSelectedItem(price);
  };

  const renderSelectionItem = (item, price) => (
    <TouchableOpacity
      style={tw`flex-row bg-white bg-opacity-8 rounded-xl items-center p-2 w-90% h-60px justify-between mt-2
                  ${selectedItem === price ? 'border border-red-500 ' : 'border border-black'}`}
      onPress={() => handleSelectItem(price)}>


      <View style={tw`flex-row  `}>
      <View style={tw`w-4 h-4 rounded-full border border-white mr-2 ${selectedItem === price ? 'bg-red-500' : ''}`} />
        <Text style={tw`text-white`}>{item}</Text>
      </View>
      <Text style={tw`text-white`}>${price}</Text>

    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1 p-4 bg-black `}>
      <View style={tw`flex-1.2 items-center justify-center mt-10`}>
        <Image style={tw`w-92.86px h-130px`} source={require('../../assets/images/film1.png')} />
      </View>

      <Text style={tw`text-white`}>Select Your Option</Text>

      <View style={tw`flex-1.5 flex-col mt-4 justify-between items-center  `}>
        {renderSelectionItem('1 Day Ticket', '2.00')}
        {renderSelectionItem('7 Day Ticket', '5.00')}
        {renderSelectionItem('14 Day Ticket', '10.00')}

      </View>

      <View style={tw`border-b border-white p-4 m-2`}/>

      <View style={tw`mt-2 flex-1 flex-row justify-between`}>
        <Text style={tw`text-white text-lg`}>Total</Text>
        {selectedItem && (
          <Text style={tw`text-xl font-bold text-white `}>$ {selectedItem}</Text>
        )}
      </View>
      <View style={tw`flex-1 items-center justify-center`}>
        <TouchableOpacity style={tw`bg-red-500 rounded-2xl p-4 w-90% items-center`} onPress={() => navigation.navigate('paymentsuscess')}>
          <Text style={tw`text-white text-lg`}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <CustomNavBar/>
    </View>
  );
};

export default TicketOption;

