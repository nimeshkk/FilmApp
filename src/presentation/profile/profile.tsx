/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import tw from 'twrnc';

const ProfilePage = () => {
  const user = {
    name: 'Joshua D. Painter',
    email: 'johua@gmail.com',
    profileImage: require('../../assets/images/getBG.png'),
  };
  const ArrowIcon = require('../../assets/images/arrow.png');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleToggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  return (
    <View style={tw`flex-1 bg-black`}>
      <View style={tw`items-center  flex-1 justify-center bg-red-600 `}>
        <Image
          source={user.profileImage}
          style={tw`w-40 h-40 rounded-full mt-28`}
          resizeMode="cover"
        />
        <Text style={tw`text-white text-xl font-bold `}>{user.name}</Text>
        <Text style={tw`text-white`}>{user.email}</Text>
      </View>


      <View style={tw` h-400px bg-black p-6 justify-between items-center mt-15`}>
      <TouchableOpacity style={tw`flex-row bg-white bg-opacity-15 p-2 rounded-md w-362px h-50px justify-between items-center pl-4 pr-2`}>
              <Text style={tw`text-white`}>My Account</Text>
              <Image source={ArrowIcon} style={tw`w-7 h-5`} resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity style={tw`flex-row bg-white bg-opacity-15 p-2 rounded-md w-362px h-50px justify-between items-center pl-4 pr-2`}>
              <Text style={tw`text-white`}>My Watch List</Text>
              <Image source={ArrowIcon} style={tw`w-7 h-5`} resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity style={tw`flex-row bg-white bg-opacity-15 p-2 rounded-md w-362px h-50px justify-between items-center pl-4 pr-2`}>
              <Text style={tw`text-white`}>Privacy Policy</Text>
              <Image source={ArrowIcon} style={tw`w-7 h-5`} resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity style={tw`flex-row bg-white bg-opacity-15 p-2 rounded-md w-362px h-50px justify-between items-center pl-4 pr-2`}>
              <Text style={tw`text-white`}>Terms And Conditions</Text>
              <Image source={ArrowIcon} style={tw`w-7 h-5`} resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-row bg-white bg-opacity-15 p-2 rounded-md w-362px h-50px justify-between items-center pl-4 pr-2`}>
        <Text style={tw`text-white`}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleToggleNotifications}
          thumbColor={notificationsEnabled ? 'red' : 'white'}
        />
      </TouchableOpacity>

      </View>


      <View style={tw`h-150px justify-end items-center bg-black`}>
        <TouchableOpacity
          style={tw`bg-red-600 text-white rounded-xl bottom-15 w-364px h-40px items-center justify-center`}
        >
          <Text style={tw`text-white text-xl`}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePage;

