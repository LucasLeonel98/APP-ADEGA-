import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from './components/TelaInicial';
import TelaCatalogo from './components/TelaCatalogo';
import TelaContato from './components/TelaContato';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Abas = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#ffffff',
            padding: 0,
            margin: 0

          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: '#400303',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
          tabBarActiveBackgroundColor: '#400303',
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#b99b92'
        }}
      >
        <Abas.Screen
          name='Inicial'
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name='home' size={20} color={color} />
            ),

          }}
        />
        <Abas.Screen
          name='Catálogo'
          component={TelaCatalogo}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='wine-bottle' size={20} color={color} />
            ),

          }}
        />
        <Abas.Screen
          name='Contato'
          component={TelaContato}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name='contacts' size={20} color={color} />
            ),
          }}
        />
      </Abas.Navigator>
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
