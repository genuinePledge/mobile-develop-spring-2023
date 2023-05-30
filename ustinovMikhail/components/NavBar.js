/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/AntDesign';
import Lab1 from './Lab1';
import Lab2 from './Lab2';

const Tab = createBottomTabNavigator();

const NavBar = () => {  
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="lab1" component={Lab1} />
        <Tab.Screen name="lab2" component={Lab2} />
      </Tab.Navigator>
    </>
  );
};

export default NavBar;
