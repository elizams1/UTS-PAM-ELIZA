import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,  
  View,
  Pressable,  
  Image,
  StatusBar, 
  TextInput,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../styles/DetailTicketScreenStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Jadwal,Harga,Pelabuhan} from '../dataBase/dataBase';

const DetailTicketScreen = ({route, navigation}) => {  
  const data = route.params.pergi;

  const [text, handleText]= useState({
    nama: '',
    jenisKelamin: '',
    umur: '',
    button: '',
  })

  const getText = (nameVar) => {
    return (val) =>{
      handleText({...text, [nameVar]:val});
      console.log(text);
    }
  }

  //modal simpan data
  const [modalData, setModalData]= useState(false);
  const isData = (value) => {
    setModalData(false);    
    console.log(text)
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#283593" />
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.logoPlace}>
            <Image 
              source={require('../assets/Logo.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <Text style={styles.textBasic}>Informasi Pemesanan</Text>
            <View style={styles.subCard}>
              <View style={styles.rute}>
                <Text style={styles.textBasic}>{Pelabuhan.find((subItem)=>subItem.idPelabuhan == data.keberangkatan).namaPelabuhan}</Text>
                <Icon style={styles.icon} name="arrow-right" size={25} color='#283593'/> 
                <Text style={styles.textBasic}>{Pelabuhan.find((subItem)=>subItem.idPelabuhan == data.kedatangan).namaPelabuhan}</Text>
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
                <Text style={styles.textIsi}>Rp. {Harga.find((subItem)=>subItem.layanan === data.layanan).harga}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textTittleForm}>Data Pemesan</Text>
            <View style={styles.form}>
                <Text style={styles.textTittle}>Nama Lengkap</Text>
                <TextInput style={styles.input} onChangeText={getText('nama')}
                  value={text.nama}/>
            </View>
            <View style={styles.form}>
                <Text style={styles.textTittle}>Jenis Kelamin</Text>
                <TextInput style={styles.input} onChangeText={getText('jenisKelamin')}
                  value={text.jenisKelamin}/>
            </View>
            <View style={styles.form}>
                <Text style={styles.textTittle}>Umur</Text>
                <TextInput style={styles.input} onChangeText={getText('umur')}
                  value={text.umur}/>
            </View>            
          </View>
          <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalData}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalData(!modalData);
                }}
                >
                <TouchableWithoutFeedback
                onPress={() => setModalData(!modalData)}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>PEMBAYARAN</Text>
                            <Text>LAKUKAN PEMBAYARAN KE NOMOR REKENING 119140002</Text> 
                            <Text>BANK APA-APA-SENDIRI</Text>
                            <Pressable                  
                            value={text.button}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                {isData('OK'),
                    navigation.navigate('HomeScreen')}
                                }}
                            >
                            <Text style={styles.textStyle}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </TouchableWithoutFeedback>                    
            </Modal>
            <Pressable style={styles.buttonBack} 
            onPress={() =>
                    setModalData(true)
                  }>
              <Text style={styles.textButton}>Simpan</Text>
            </Pressable>            
          </View>

        </View>
        
      </SafeAreaView>
      </ScrollView>
    </>
  );
};



export default DetailTicketScreen;