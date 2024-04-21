import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={{
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 10,
        margin: 20
      }}
        onPress={() => navigation.navigate('DetailScreen')}
      >
        <Text style={{ color: 'white' }}>Go to Details</Text>
      </TouchableOpacity>
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

export default HomeScreen