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
import {Jadwal,Harga,Pelabuhan} from '../dataBase/dataBase';

const TicketScreen = ({route, navigation}) => {  
  const data = route.params.text;
  
  const dataNo = () => {
    return (
      <View style={styles.jadwalNot}> 
        <Text style={styles.textJadwalNot}>
          Data tidak lengkap, Lengkapi data pencarian
        </Text>
      </View>
    );
  };

  const dataYes = (pergi) =>{
    console.log(pergi);
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
          <Text style={styles.textBasic}>{Pelabuhan.find((subItem)=>subItem.idPelabuhan == pergi.keberangkatan).namaPelabuhan}</Text>
          <Icon style={styles.icon} name="arrow-right" size={25} color='#283593'/> 
          <Text style={styles.textBasic}>{Pelabuhan.find((subItem)=>subItem.idPelabuhan == pergi.kedatangan).namaPelabuhan}</Text>
          </View>
          <View style={styles.jadwal}>
          <Text style={styles.textTittle}>Jadwal Keberangkatan</Text>
          <Text style={styles.textIsi}>{pergi.tanggal}</Text>
          <Text style={styles.textIsi}>{pergi.waktu + " WIB"}</Text>
          </View>
          <View style={styles.layanan}>
          <Text style={styles.textTittle}>Layanan</Text>
          <Text style={styles.textIsi}>{pergi.layanan}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.harga}>
          <Text style={styles.textIsi}>{data.penumpang}</Text>
          <Text style={styles.textIsi}>Rp. {Harga.find((subItem)=>subItem.layanan === pergi.layanan).harga}</Text>
          </View>
      </View>
      </View>
      <View style={styles.harga}>
      <Text style={styles.textBasic1}>Total</Text>
      <Text style={styles.textBasic1}>Rp. {Harga.find((subItem)=>subItem.layanan === pergi.layanan).harga}</Text>
      </View>
      <View style={styles.harga}>
      <Pressable style={styles.buttonBack} 
      onPress={() =>
              navigation.navigate('HomeScreen')                     
              }>
          <Text style={styles.textBasic}>Kembali</Text>
      </Pressable>
      <Pressable style={styles.buttonCont} 
      onPress={() =>
              navigation.navigate('DetailTicketScreen',{pergi})                     
              }>
          <Text  style={styles.buttonText1}>Lanjutkan</Text>
      </Pressable>
      </View>
    </View>  
    );   
  };

  function RenderData() {
    if (data.keberangkatan !== ''&& data.kedatangan !== ''&& data.layanan !== ''&& data.tanggal !== ''&& data.waktu !== ''&& data.penumpang !== ''){
        const keberangkatanId = Pelabuhan.find(item => item.namaPelabuhan == data.keberangkatan).idPelabuhan;
        const kedatanganId = Pelabuhan.find(item => item.namaPelabuhan == data.kedatangan).idPelabuhan;
        const pergi = Jadwal.filter(item => item.keberangkatan == keberangkatanId && item.kedatangan == kedatanganId && item.tanggal == data.tanggal && item.waktu == data.waktu && item.layanan == data.layanan && item.penumpang == data.penumpang);
      
      if (pergi.length== '') {
        return (
          <View style={styles.jadwalNot}>                
            <Text style={styles.textJadwalNot}>
                Jadwal tidak ada, Silahkan melakukan pencarian ulang
            </Text>
          </View>
        );
      }
      return dataYes(pergi[0]);
    };
    return dataNo();
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#283593" />
      <SafeAreaView style={styles.container}>
        <RenderData />                
      </SafeAreaView>
    </>
  );
};

export default TicketScreen;