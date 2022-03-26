import React, {useState} from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import styles from '../styles/HistoryBookingScreenStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const HistoryBookingScreen = ({navigation}) => {  

  return (
    <ScrollView >
    <SafeAreaView style={styles.container}>
        <View style={styles.logoPlace}>
            <Image 
        source={require('../assets/Logo.png')}
        style={styles.logo}
            />
        </View>
      <View>
          <Text style={styles.title}>Riwayat Pemesanan</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.rute}>
          <Text style={styles.textBasic}>Merak</Text>
          <Icon style={styles.icon} name="arrow-right" size={25} color='#283593'/> 
          <Text style={styles.textBasic}>Bakauheni</Text>
        </View>
        <View style={styles.subCard}>
            <View style={styles.jadwal}>
                <Text style={styles.textBasic1}>Jadwal Keberangkatan</Text>
                <Text style={styles.textIsi}>2022-03-24</Text>
                <Text style={styles.textIsi}>08:00 WIB</Text>
            </View>
            <View style={styles.layanan}>
                <Text style={styles.textBasic1}>Layanan</Text>
                <Text style={styles.textIsi2}>VIP</Text>
            </View>
        </View>        
    </View>

    <View style={styles.card}>
        <View style={styles.rute}>
          <Text style={styles.textBasic}>Bakauheni</Text>
          <Icon style={styles.icon} name="arrow-right" size={25} color='#283593'/> 
          <Text style={styles.textBasic}>Merak</Text>
        </View>
        <View style={styles.subCard}>
            <View style={styles.jadwal}>
                <Text style={styles.textBasic1}>Jadwal Keberangkatan</Text>
                <Text style={styles.textIsi}>2022-03-27</Text>
                <Text style={styles.textIsi}>08:00 WIB</Text>
            </View>
            <View style={styles.layanan}>
                <Text style={styles.textBasic1}>Layanan</Text>
                <Text style={styles.textIsi2}>VIP</Text>
            </View>
        </View>        
    </View>

    <View style={styles.card}>
        <View style={styles.rute}>
          <Text style={styles.textBasic}>Merak</Text>
          <Icon style={styles.icon} name="arrow-right" size={25} color='#283593'/> 
          <Text style={styles.textBasic}>Bakauheni</Text>
        </View>
        <View style={styles.subCard}>
            <View style={styles.jadwal}>
                <Text style={styles.textBasic1}>Jadwal Keberangkatan</Text>
                <Text style={styles.textIsi}>2022-03-24</Text>
                <Text style={styles.textIsi}>08:00 WIB</Text>
            </View>
            <View style={styles.layanan}>
                <Text style={styles.textBasic1}>Layanan</Text>
                <Text style={styles.textIsi2}>VIP</Text>
            </View>
        </View>        
    </View>

    <View style={styles.card}>
        <View style={styles.rute}>
          <Text style={styles.textBasic}>Merak</Text>
          <Icon style={styles.icon} name="arrow-right" size={25} color='#283593'/> 
          <Text style={styles.textBasic}>Bakauheni</Text>
        </View>
        <View style={styles.subCard}>
            <View style={styles.jadwal}>
                <Text style={styles.textBasic1}>Jadwal Keberangkatan</Text>
                <Text style={styles.textIsi}>2022-03-24</Text>
                <Text style={styles.textIsi}>08:00 WIB</Text>
            </View>
            <View style={styles.layanan}>
                <Text style={styles.textBasic1}>Layanan</Text>
                <Text style={styles.textIsi2}>VIP</Text>
            </View>
        </View>        
    </View>

    </SafeAreaView>
    </ScrollView>
  );
};



export default HistoryBookingScreen;