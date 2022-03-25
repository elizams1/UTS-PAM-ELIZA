import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,  
  View,
  Pressable,  
  Image,
  StatusBar, 
} from 'react-native';
import styles from '../styles/TicketScreenStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TicketScreen = ({route, navigation}) => {  
  const data = route.params.text;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#283593" />
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.logoPlace}>
            <Image 
              source={require('../assets/Logo.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <Text style={styles.textBasic1}>Kuota Tersedia (1000)</Text>
          </View>
          <View>
            <Text style={styles.textBasic}>Rincian Tiket</Text>
            <View style={styles.subCard}>
              <View style={styles.rute}>
                <Text style={styles.textBasic}>{data.keberangkatan}</Text>
                <Icon style={styles.icon} name="arrow-right" size={25} color='#283593'/> 
                <Text style={styles.textBasic}>{data.kedatangan}</Text>
              </View>
              <View style={styles.jadwal}>
                <Text style={styles.textTittle}>Jadwal Keberangkatan</Text>
                <Text style={styles.textIsi}>{data.tanggal}</Text>
                <Text style={styles.textIsi}>{data.waktu + " WIB"}</Text>
              </View>
              <View style={styles.layanan}>
                <Text style={styles.textTittle}>Layanan</Text>
                <Text style={styles.textIsi}>{data.layanan}</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.harga}>
                <Text style={styles.textIsi}>{data.penumpang}</Text>
                <Text style={styles.textIsi}>Rp. 65.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.harga}>
            <Text style={styles.textBasic1}>Total</Text>
            <Text style={styles.textBasic1}>Rp. 65.000</Text>
          </View>
          <View style={styles.harga}>
            <Pressable style={styles.buttonBack} 
            onPress={() =>
                    navigation.navigate('HomeScreen')                     
                  }>
              <Text style={styles.textBasic}>Kembali</Text>
            </Pressable>
            <Pressable style={styles.buttonCont}>
              <Text  style={styles.buttonText1}>Lanjutkan</Text>
            </Pressable>
          </View>

        </View>
        
      </SafeAreaView>
    </>
  );
};



export default TicketScreen;