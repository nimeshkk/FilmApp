/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useEffect} from 'react';
import i18next from './src/services/i18next';
import Routes from './src/navigation/Routes';
import SplashScreen from './src/presentation/splashScreen/splashScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MovieDetails from './src/presentation/moviedetails/movieDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInPage from './src/presentation/SignIn/signin';
import SignUpPage from './src/presentation/SignUp/signup';
import Forgotpassword from './src/presentation/forgotPassword/forgotPW';
import Newpassword from './src/presentation/newPassword/newPassword';
import OTP from './src/presentation/OTPpage/OtpPage';
import OTPVerificationSuccess from './src/presentation/verifyOTP/verifyOTP';
import HomeScreen from './src/presentation/home/home';
import MostPopular from './src/presentation/mostPopular/mostpopular';
import SearchListPage from './src/presentation/searchList/searchList';
import GetStartedPage from './src/presentation/getStart/getStart';
import TicketOption from './src/presentation/ticketOption/ticketOption';
import VideoPlay from './src/presentation/videoPlay/videoPlay';
import DownloadedListPage from './src/presentation/DownloadPage/downloadPage';
import SignInSignUpHome from './src/presentation/SignInSignUpHome/signInSignUpHome';
import ProfilePage from './src/presentation/profile/profile';
import PaymentSuccess from './src/presentation/paymentSuccess/paymentSuccess';




const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  useEffect(() => {
    i18next.changeLanguage('sinhala');
  }, []);



  return (

    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitle: '',
      }}
    >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="GetStart" component={GetStartedPage} />
        <Stack.Screen name="signInSignUpHome" component={SignInSignUpHome} />
        <Stack.Screen name="signup" component={SignUpPage} />
        <Stack.Screen name="signin" component={SignInPage} />
        <Stack.Screen name="ForgotPassword" component={Forgotpassword} />
        <Stack.Screen name="NewPassword" component={Newpassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="VerifyOtp" component={OTPVerificationSuccess} />
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="MostPopular" component={MostPopular} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="SearchList" component={SearchListPage} />
        <Stack.Screen name="TicketOption" component={TicketOption} />
        <Stack.Screen name="Videoplay" component={VideoPlay} />
        <Stack.Screen name="Download" component={DownloadedListPage} />
        <Stack.Screen name="profile" component={ProfilePage} />
        <Stack.Screen name="paymentsuscess" component={PaymentSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
