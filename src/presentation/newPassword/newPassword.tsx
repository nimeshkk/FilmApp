/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';

const Newpassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={tw`flex-1 bg-black `}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Image style={tw`w-153.38px h-62.87px`} source={require('../../assets/images/Layer_2.png')} />
      </View>

      <View style={tw`flex-2 p-4`}>

        <Text style={tw`text-white text-2xl mb-2`}>Enter Your New Password</Text>
        <Text style={tw`text-white text-sm mt-2`}>
            Lorem ipsum dolor Architecto tempore, quis inventore alias, reprehenderit ratione voluptate, consectetur adipisci beatae
          </Text>
      <View style={tw`items-center mt-4`}>

      <View style={tw`bg-white bg-opacity-8 rounded-xl p-1 mb-2 w-343px h-45px self-center relative flex-row items-center`}>
      <Image source={require('../../assets/images/lockText.png')} style={tw`mr-2 ml-2`} />
      <TextInput
        style={tw`flex-1 text-white`}
        placeholder="Your Password"
        placeholderTextColor="#848484"
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        style={tw`p-2`}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Image
          source={require('../../assets/images/eye.png')} 
        />
      </TouchableOpacity>
     </View>



      <View style={tw`bg-white bg-opacity-8 rounded-xl p-1 mb-2 w-343px h-45px self-center relative flex-row items-center`}>
      <Image source={require('../../assets/images/lockText.png')} style={tw`mr-2 ml-2`} />
      <TextInput
        style={tw`flex-1 text-white`}
        placeholder="Re Enter Password"
        placeholderTextColor="#848484"
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        style={tw`p-2`}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Image
          source={require('../../assets/images/eye.png')} 
        />
      </TouchableOpacity>
      </View>
      </View>
      </View>

      <View style={tw`flex-1 items-center justify-center`}>
      <LinearGradient
      colors={['#ED1C24', '#FF9441']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={tw`rounded-xl w-340px h-40px items-center justify-center`}
    >
      <TouchableOpacity style={tw`w-full h-full items-center justify-center`}>
        <Text style={tw`text-white text-lg items-center justify-center`}>Submit</Text>
      </TouchableOpacity>
    </LinearGradient>
      </View>
    </View>
  );
};

export default Newpassword;