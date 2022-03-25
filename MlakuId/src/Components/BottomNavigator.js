import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import DetailTicketScreen from '../screens/DetailTicketScreen';
import BookingScreen from '../screens/BookingScreen';
import CancelScreen from '../screens/CancelScreen';
import ProfileScreen from '../screens/ProfileScreen';


import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen(){
    return(
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
            <HomeStack.Screen name="TicketScreen" component={TicketScreen}/>
            <HomeStack.Screen name="DetailTicketScreen" component={DetailTicketScreen}/>
        </HomeStack.Navigator>
    );
}

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
                bottom:0,
            },
            tabBarInactiveTintColor: '#535151',
            tabBarActiveTintColor: '#283593',
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                marginBottom: 5,
                fontFamily: "Ubuntu-Light",            
                fontSize:10,
            }

         }}
        >
        <Tab.Screen 
            name="Home" 
            component={HomeStackScreen}
            options={{ 
                tabBarIcon: ({color}) =>(
                    <Icon 
                    name='home'         
                    size={20} 
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
                    size={20} 
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
                    size={25} 
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
                    size={20} 
                    color={color}                   
                    />
                )
             }}
        />
      </Tab.Navigator>    
  );
}

export default BottomTab;