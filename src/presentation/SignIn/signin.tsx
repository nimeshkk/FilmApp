/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

const SignInPage = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    navigation.navigate('HomePage');
    // try {
    //   const response = await axios.post('https://localhost:57928/api/Users/login?useCookies=false&useSessionCookies=false', 
    //   {
    //     email,
    //     password,
    //   });

    //   if (response.data.success) {
    //     navigation.navigate('HomePage');
    //   } else {
    //     Alert.alert("Error", "Invalid credentials. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    //   Alert.alert("Error", "An error occurred. Please try again later.");
    // }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={tw`flex-1 bg-black`}>
      <View style={tw`h-100px items-center justify-center`}>
        <Image style={tw`w-142px h-58px`} source={require('../../assets/images/Layer_2.png')} />
      </View>

      <View style={tw`h-100px justify-end p-2`}>
        <Text style={tw`text-white text-2xl mb-2`}>Login</Text>
        <Text style={tw`text-white text-sm`}>
          Lorem adipisicing elit. Nostrum repudiandae quia asperiores ab, harum quo eveniet
          beatae, omnis odit beatae, omnis
        </Text>
      </View>

      <View style={tw`h-240px items-center justify-between mt-20`}>
        <View style={tw`bg-white bg-opacity-8 rounded-xl p-1 mb-1 w-343px h-45px self-center relative flex-row items-center`}>
          <Image source={require('../../assets/images/profileText.png')} style={tw`mr-2 ml-2`} />
          <TextInput
            style={tw`text-white flex-1`}
            placeholder="Your Email"
            value={email}
            placeholderTextColor="#848484"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={tw`bg-white bg-opacity-8 rounded-xl p-1 mb-2 w-343px h-45px self-center relative flex-row items-center`}>
          <Image source={require('../../assets/images/lockText.png')} style={tw`mr-2 ml-2`} />
          <TextInput
            style={tw`flex-1 text-white`}
            placeholder="Your Password"
            value={password}
            placeholderTextColor="#848484"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={tw`p-2`}
            onPress={toggleShowPassword}
          >
            <Image source={require('../../assets/images/eye.png')} />
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['#ED1C24', '#FF9441']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={tw`rounded-xl w-340px h-40px items-center justify-center`}
        >
          <TouchableOpacity
            style={tw`w-full h-full items-center justify-center`}
            onPress={handleSignIn}
          >
            <Text style={tw`text-white text-lg items-center justify-center`}>Signin</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={tw`text-white text-sm mt-2`}>Create an account? <Text style={tw`text-red-600`}>Signup</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={tw`text-white text-sm ml-55 mt-2`} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-white text-sm`}>-Login With-</Text>
        <View style={tw`flex-row`}>
          <TouchableOpacity style={tw`bg-white bg-opacity-8 p-2 rounded-xl mr-2 w-15% items-center`}>
            <Image style={tw`w-6 h-6`} source={require('../../assets/images/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-white bg-opacity-8 p-2 rounded-xl w-15% items-center`}>
            <Image style={tw`w-6 h-6`} source={require('../../assets/images/ios.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInPage;




