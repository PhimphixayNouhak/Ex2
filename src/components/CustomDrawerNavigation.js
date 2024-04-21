import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';

const CustomDrawerNavigation = ({ navigation }) => {
  return (
    <Drawer.Section style={{ padding: 40 }}>
      <Drawer.Item label='Card'
        icon={"credit-card-check-outline"}
        onPress={() => navigation.navigate("CardScreen")}
      />
      <Drawer.Item label='Profile'
        icon={"account-check"}
        onPress={() => navigation.navigate("ProfileScreen")}
      />
      <Drawer.Item label='Logout'
        icon={"logout"}
        onPress={() => navigation.navigate("LogoutScreen")}
      />
    </Drawer.Section>
  )
}

export default CustomDrawerNavigation