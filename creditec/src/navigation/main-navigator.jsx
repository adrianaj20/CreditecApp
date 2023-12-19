import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { CalculaScreen } from "../pages/calcula-screen";
import { Ionicons } from '@expo/vector-icons'; 
import { PerfilScreen } from "../pages/perfile-screen";
import { InformateScreen } from "../pages/informate-screen";
import { ContactanosScreen } from "../pages/contactanos-screen";
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import {HomeScreen} from '../pages/home-screen'
import { AuthNavigator } from "./auth-navigator";

const Tab = createBottomTabNavigator()

export const MainNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#124BCD',
          },
        })} initialRouteName="Perfil">

        <Tab.Screen 
          name={'Home'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color, focused }) => (
              <Feather name="home" size={24}
                color={focused ? 'blue' : 'black'}
              />
            ),
          }}
        />

        <Tab.Screen 
          name={'Perfil'}
          component={PerfilScreen}
          options={{
            tabBarIcon: ({ size, color, focused }) => (
              <Ionicons name="person-outline" size={24} 
                color={focused ? 'blue' : 'black'}
              />
            ),
          }}
        />

        <Tab.Screen 
          name={'Informate'}
          component={InformateScreen}
          options={{
            tabBarIcon: ({ size, color, focused }) => (
              <Feather name="info" size={24} 
                color={focused ? 'blue' : 'black'}
              />
            ),
          }}
        />

        <Tab.Screen 
          name={'Calcula'}
          component={CalculaScreen}
          options={{
            tabBarIcon: ({ size, color, focused }) => (
              <AntDesign name="calculator" size={24} 
                color={focused ? 'blue' : 'black'}
              />
            ),
          }}
        />

        <Tab.Screen 
          name={'Contacto'}
          component={ContactanosScreen}
          options={{
            tabBarIcon: ({ size, color, focused }) => (
              <MaterialCommunityIcons name="message-reply-text-outline" size={24} 
                color={focused ? 'blue' : 'black'}
              />
            ),
          }}
        />


      </Tab.Navigator>
  )
}