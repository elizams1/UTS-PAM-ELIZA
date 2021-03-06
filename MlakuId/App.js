import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';

import BottomTab from './src/Components/BottomNavigator';
import TicketScreen from './src/screens/TicketScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="BottomTab" component={BottomTab}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>                   
      </Stack.Navigator> 
         
    </NavigationContainer>
  );
};

export default App;