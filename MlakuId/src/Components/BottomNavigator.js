import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import CancelScreen from '../screens/CancelScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTab = ({ navigation}) => {
  return(    
      <Tab.Navigator
        screenOptions={{   
            headerShown: false,         
            tabBarStyle: { 
                position: 'absolute',     
                elevation: 10,
                backgroundColor: '#ffff',
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                height: 60,             
                paddingTop: 10,
            },
            tabBarInactiveTintColor: '#535151',
            tabBarActiveTintColor: '#283593',
            tabBarLabelStyle: {
                marginBottom: 5,
                fontFamily: "Ubuntu-Light",                
            }

         }}
        >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
                tabBarIcon: ({color}) =>(
                    <Icon 
                    name='home'         
                    size={25} 
                    color={color}                
                    />
                )
             }}
        />
        <Tab.Screen name="Booking" component={BookingScreen}
            options={{ 
                tabBarIcon: ({color}) =>(
                    <Icon 
                    name='clipboard-list'   
                    size={25} 
                    color={color}                
                    />
                )
             }}
        />
        <Tab.Screen name="Cancel" component={CancelScreen}
            options={{ 
                tabBarIcon: ({color}) =>(
                    <Icon2 
                    name='clipboard-remove'   
                    size={30} 
                    color={color}                  
                    />
                )
             }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
            options={{ 
                tabBarIcon: ({color}) =>(
                    <Icon 
                    name='user-alt'   
                    size={25} 
                    color={color}                   
                    />
                )
             }}
        />
      </Tab.Navigator>    
  );
}

export default BottomTab;