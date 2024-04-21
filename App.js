import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/routes/MyStack';
import MyDrawer from './src/routes/MyDrawer';
import MyMaterialBottomTab from './src/routes/MyMaterialBottomTab';
const Stack = createStackNavigator()
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <MyStack /> */}
        {/* <MyDrawer /> */}
        <MyMaterialBottomTab />
      </NavigationContainer>
    </PaperProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});