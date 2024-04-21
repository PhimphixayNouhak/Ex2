import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CardScreen from '../screens/CardScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CustomDrawerNavigation from '../../components/CustomDrawerNavigation'
import LogoutScreen from '../screens/LogoutScreen'

const Drawer = createDrawerNavigator()
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerNavigation {...props} />}
    >
      <Drawer.Screen
        name='CardScreen' component={CardScreen} />
      <Drawer.Screen name='ProfileScreen' component={ProfileScreen} />
      <Drawer.Screen name='LogoutScreen' component={LogoutScreen} />
    </Drawer.Navigator >
  )
}

export default MyDrawer