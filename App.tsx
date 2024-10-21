import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import Mainpage from './screens/LoginPage';
import ChefsMenu from '../ZamasKitchen/screens/ChefsMenu'
import LoginPage from './screens/LoginPage';
import Home from './screens/Home';
import FullMenu from './screens/FullMenu';
import { MenuProvider } from './screens/MenuContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <MenuProvider>
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}options={{headerShown:false}}/>
      <Stack.Screen name='LoginPage' component={LoginPage}options={{headerShown:false}}/>
      <Stack.Screen name='ChefsMenu' component={ChefsMenu}options={{headerShown:false}}/>
      <Stack.Screen name='FullMenu' component={FullMenu}options={{headerShown:false}}/>
      

    </Stack.Navigator>
   </NavigationContainer>
   </MenuProvider>
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
