/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import Settings from '../presentation/app/Settings/Settings';
import {AppStackParameterList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../presentation/app/About/About';
import Analytics from '../presentation/app/Analytics/Analytics';
import Home from '../presentation/app/Home/Home';
import Profile from '../presentation/app/Profile/Profile';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconFT from 'react-native-vector-icons/Fontisto';
import Colors from '../utils/colors/Colors';
import BottomTabIcon from '../components/elements/BottomTabIcon/BottomTabIcon';
import {getScaleNumber} from '../utils/dimentions/refDimentions';

const Tab = createBottomTabNavigator<AppStackParameterList>();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabbarStyle: {
    position: 'absolute',
    botton: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: '#ffffff',
  },
};

export default function AppStack() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <BottomTabIcon
                label="About"
                icon={
                  <IconMI
                    name="description"
                    size={getScaleNumber(25)}
                    color={focused ? Colors.nonary : Colors.dark}
                  />
                }
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <BottomTabIcon
                label="Analytics"
                icon={
                  <IconMI
                    name="analytics"
                    size={getScaleNumber(25)}
                    color={focused ? Colors.nonary : Colors.dark}
                  />
                }
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <BottomTabIcon
                label="Home"
                icon={
                  <IconMI
                    name="home"
                    size={getScaleNumber(40)}
                    color={focused ? Colors.nonary : Colors.dark}
                  />
                }
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <BottomTabIcon
                label="Profile"
                icon={
                  <IconFT
                    name="user-secret"
                    size={getScaleNumber(25)}
                    color={focused ? Colors.nonary : Colors.dark}
                  />
                }
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <BottomTabIcon
                label="Settings"
                icon={
                  <IconMI
                    name="settings"
                    size={getScaleNumber(25)}
                    color={focused ? Colors.nonary : Colors.dark}
                  />
                }
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
