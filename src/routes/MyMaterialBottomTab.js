import { View, Text } from 'react-native'
import React from 'react'

import LogoutScreen from '../screens/LogoutScreen'
import LoginScreen from '../screens/LoginScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import CardScreen from '../screens/CardScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DetailScreen from '../screens/DetailScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator()
const MyMaterialBottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen"
      activeColor="blue"
      inactiveColor="black"

      barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen options={{

        tabBarIcon: ({ color }) => (<Entypo name="home" size={24} color={color} />)
      }}
        name='HomeScreen' component={HomeScreen} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="details" size={24} color={color} />)
      }} name='DetailScreen' component={DetailScreen} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (<MaterialIcons name="account-circle" size={24} color={color} />)
      }} name='ProfileScreen' component={ProfileScreen} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (<Entypo name="login" size={24} color={color} />)
      }} name='LogoutScreen' component={LogoutScreen} />
    </Tab.Navigator>
  )
}

export default MyMaterialBottomTab