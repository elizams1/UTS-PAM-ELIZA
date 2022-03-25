import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,  
  View,
  Pressable,  
  Image,
  StatusBar, 
} from 'react-native';
import styles from '../styles/BookingScreenStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BookingScreen = ({navigation}) => {  
  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#283593" />
      <SafeAreaView style={styles.container}>
        <Text>Ini booking page</Text>
        
      </SafeAreaView>
    </>
  );
};



export default BookingScreen;