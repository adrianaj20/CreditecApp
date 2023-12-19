import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigator } from './src/navigation/main-navigator';
import {AuthNavigator} from './src/navigation/auth-navigator'
import { useGlobalStore } from './src/store/global.store';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

export default function App() {
  const {isLogged} = useGlobalStore()

  return (
    <NavigationContainer independent={true}>
    {
      isLogged ? 
        <MainNavigator/>
      :
        <AuthNavigator/>
    }
    </NavigationContainer>
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
