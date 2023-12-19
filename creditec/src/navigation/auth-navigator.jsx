import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../pages/login-screen';
import { RegisterScreen } from '../pages/register-screen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export const AuthNavigator = () => {
  return (
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen 
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
} 