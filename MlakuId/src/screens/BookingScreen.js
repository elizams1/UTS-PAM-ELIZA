import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,  
  View,
  Pressable,  
  Image,
  StatusBar, 
  ScrollView,  
} from 'react-native';
import styles from '../styles/BookingScreenStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Jadwal,Harga,Pelabuhan} from '../dataBase/dataBase';

const BookingScreen = ({route, navigation}) => {  
  
  let check = false;
  
  function CheckData (){
    try{
      check = route.params.baru;
    }catch (err){
      check = false;
    }
    let hasil = check ? dataNo():dataYes();
    return hasil;
  }

  const dataNo = () => {
    return (
      <View style={styles.jadwalNot}> 
        <Text style={styles.textJadwalNot}>
          Data pemesanan tidak ada, Silahkan melakukan pemesanan
        </Text>
      </View>
    );
  };

  const dataYes = () =>{        
    return(
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
          <Text style={styles.textBasic}>Merak</Text>
          <Icon style={styles.icon} name="arrow-right" size={25} color='#283593'/> 
          <Text style={styles.textBasic}>Bakauheni</Text>
          </View>
          <View style={styles.jadwal}>
          <Text style={styles.textTittle}>Jadwal Keberangkatan</Text>
          <Text style={styles.textIsi}>2022-03-24</Text>
          <Text style={styles.textIsi}>08:00 WIB</Text>
          </View>
          <View style={styles.layanan}>
          <Text style={styles.textTittle}>Layanan</Text>
          <Text style={styles.textIsi}>VIP</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.harga}>
          <Text style={styles.textIsi}>1 Dewasa</Text>
          <Text style={styles.textIsi}>Rp. 80.000</Text>
          </View>
      </View>
      </View>
      <View style={styles.harga}>
      <Text style={styles.textBasic1}>Total</Text>
      <Text style={styles.textBasic1}>Rp. 80.000</Text>
      </View>
       
      <View>
        <Text style={styles.textBasic1}>Data Pemesan</Text>
        <View style={styles.form}>
            <Text style={styles.textTittle}>Nama Lengkap</Text>
            <Text style={styles.textIsi}>Eliza</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.textTittle}>Jenis Kelamin</Text>
            <Text style={styles.textIsi}>Perempuan</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.textTittle}>Umur</Text>
            <Text style={styles.textIsi}>20 Tahun</Text>
        </View>
        <View style={styles.buttonPlace}>
          <Pressable onPress={()=>navigation.navigate('Cancel')} style={styles.buttonCont}>
              <Text style={styles.buttonText1}>Batalkan</Text>

          </Pressable>
        </View>            
      </View>
    </View>  
    );   
  };  
    
  

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#283593" />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <CheckData/>        
        </SafeAreaView>
      </ScrollView>
      
    </>
  );
};

export default BookingScreen;