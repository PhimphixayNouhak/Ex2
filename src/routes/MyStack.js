import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import CustomNavigationBar from '../components/CustomNavigationBar'

const Stack = createStackNavigator()
const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        header: (props) =>
          <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default MyStack