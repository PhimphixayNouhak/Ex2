import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LogoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LogoutScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default LogoutScreen