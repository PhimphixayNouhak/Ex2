import { View, Text } from 'react-native'
import React from 'react'

import LogoutScreen from '../screens/LogoutScreen'
import LoginScreen from '../screens/LoginScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const MyMaterialBottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="LogoutScreen"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}>
      <Tab.Screen name='LogoutScreen' component={LogoutScreen} />
      <Tab.Screen name='LoginScreen' component={LoginScreen} />
    </Tab.Navigator>
  )
}

export default MyMaterialBottomTab