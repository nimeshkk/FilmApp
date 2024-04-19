/* eslint-disable prettier/prettier */
// import React ,{createContext, useState} from "react";
// import axios from 'axios';
// import {  LOGIN_URL, REGISTER_URL } from "./config";
// import AsyncStorage from '@react-native-async-storage/async-storage';



// export const AuthContext = createContext();


// export const AuthProvider = ({children}) => {
//     const [userInfo ,setUserInfo] = useState({});
//     const [isLoading ,setLoading] = useState(false);

//     const register = (email, password) => {
//       setLoading(true);
//       axios
//         .post(`${REGISTER_URL}`, {
//           email,
//           password,
//         })
//         .then((res) => {
//           let userInfo = res.data;
//           setUserInfo(userInfo);
//           AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//           setLoading(false);
//           console.log(userInfo);

//           children.navigation.navigate('HomePage');
//         })
//         .catch((e) => {
//           console.log(`register error ${e}`);
//           setLoading(false);
//         });
//     };

//     const login = (email, password) => {
//       setLoading(true);
//       axios
//         .get(`${LOGIN_URL}`, {
//           email,
//           username: password,
//         })
//         .then((res) => {
//           let userInfo = res.data;
//           console.log(userInfo);
//           setUserInfo(userInfo);
//           AsyncStorage.setItem(`userInfo`, JSON.stringify(userInfo));
//           setLoading(false);


//           children.navigation.navigate('HomePage');
//         })
//         .catch((e) => {
//           console.log(`login error ${e}`);
//         });
//     };
//     return(
//         <AuthContext.Provider
//         value={{
//             isLoading,
//             userInfo,
//             register,
//             login,
//             }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };