import React, {useEffect, useState} from 'react';
import {  
  Text,
  SafeAreaView,
  View,
  ScrollView,  
  TouchableOpacity,  
  StatusBar,
  Image,
  Pressable,  
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../styles/HomeScreenStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({navigation}) => {  
  //ambil data
  const [text, handleText] = useState({
    keberangkatan: '',
    kedatangan: '',
    layanan: '',
    tanggal: '',
    waktu: '',
    penumpang: '',
    
  })  
  const getText = (nameVar) => {
    return (val) =>{
      handleText({...text, [nameVar]:val});
      console.log(text);
    }
  }
  
  //picker pelabuhan keberangkatan   
  const [pelabuhan, setIsPelabuhan] = useState(false);
  const isPelabuhan = (value) => {
    setIsPelabuhan(value);    
    handleText({...text, keberangkatan: value});
    console.log(text)
  }

  //picker pelabuhan kedatangan
  const [pelabuhanDatang, setIsPelabuhanDatang] = useState(false);
  const isPelabuhanDatang = (value) => {
    setIsPelabuhanDatang(value);    
    handleText({...text, kedatangan: value});
    console.log(text)
  }

  //picker layanan 
  const [layanan, setIsLayanan] = useState(false);
  const isLayanan = (value) => {
    setIsLayanan(value);    
    handleText({...text, layanan: value});
    console.log(text)
  }

  //pickerDate
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showDatePicker = () => {
    setIsPickerShow(true);
  };

  const onChangeDate = (event, value) => {
    setIsPickerShow(false);
    setDate(value);
    handleText({...text, tanggal: moment(value).format('YYYY-MM-DD')});
  };


  //pickerTime
  const [time, isTimePicker] = useState(false);
  const isTime = (value) => {
    isTimePicker(value);    
    handleText({...text, waktu: value});
    console.log(text)
  }

  //picker penumpang
  const [modalPenumpang, setModalPenumpang]= useState(false);
  const isPenumpang = (value) => {
    setModalPenumpang(false);
    handleText({...text, penumpang: value});
    console.log(text)
  }
      
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#283593" />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoPlace}>
            <Image 
              source={require('../assets/Logo.png')}
              style={styles.logo}
            />
          </View>

          <View style={styles.card}> 

            <View style={styles.group}>
              <Text style={styles.title}> Pelabuhan Keberangkatan</Text>
                <View style={styles.search}>
                  <Icon style={styles.icon} name="basket-outline" size={25} color='#283593'/>                  
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={pelabuhan}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setIsPelabuhan(!pelabuhan);
                    }}
                  >
                    <TouchableWithoutFeedback
                    onPress={() => setIsPelabuhan(!pelabuhan)}
                     >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Pelabuhan</Text>
                          <Pressable                  
                            value={text.keberangkatan}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isPelabuhan('Bakauheni')
                              }}
                          >
                            <Text style={styles.textStyle}>Bakauheni</Text>
                          </Pressable>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            value={text.keberangkatan}
                            onPress={() => {
                              isPelabuhan('Merak')
                              }}                            
                          >
                            <Text style={styles.textStyle}>Merak</Text>
                          </Pressable>
                          <Pressable                  
                            value={text.keberangkatan}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isPelabuhan('Tanjung Priok')
                              }}
                          >
                            <Text style={styles.textStyle}>Tanjung Priok</Text>
                          </Pressable>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>                    
                  </Modal>
                  <Pressable                    
                    onPress={() => setIsPelabuhan(true)}
                  >
                    <Text style={styles.input}>{text.keberangkatan == ""? " " : text.keberangkatan}</Text>
                  </Pressable>
                </View>
            </View>

            <View style={styles.group}>
              <Text style={styles.title}> Pelabuhan Kedatangan</Text>
                <View style={styles.search}>
                  <Icon style={styles.icon} 
                  name="basket-check-outline"                   
                  size={25} color='#283593'/>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={pelabuhanDatang}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setIsPelabuhanDatang(!pelabuhanDatang);
                    }}
                  >
                    <TouchableWithoutFeedback
                    onPress={() => setIsPelabuhanDatang(!pelabuhanDatang)}
                     >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Pelabuhan</Text>
                          <Pressable                  
                            value={text.kedatangan}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isPelabuhanDatang('Bakauheni')
                              }}
                          >
                            <Text style={styles.textStyle}>Bakauheni</Text>
                          </Pressable>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            value={text.kedatangan}
                            onPress={() => {
                              isPelabuhanDatang('Merak')
                              }}                            
                          >
                            <Text style={styles.textStyle}>Merak</Text>
                          </Pressable>
                          <Pressable                  
                            value={text.kedatangan}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isPelabuhanDatang('Tanjung Priok')
                              }}
                          >
                            <Text style={styles.textStyle}>Tanjung Priok</Text>
                          </Pressable>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>                    
                  </Modal>
                  <Pressable                    
                    onPress={() => setIsPelabuhanDatang(true)}
                  >
                    <Text style={styles.input}>{text.kedatangan == ""? " " : text.kedatangan}</Text>
                  </Pressable>
                </View>
            </View>
            {/* eliza-119140002 */}
            <View style={styles.group}>
              <Text style={styles.title}> Kelas Layanan</Text>
                <View style={styles.search}>
                  <Icon style={styles.icon} name="seat-passenger" size={25} color='#283593'/>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={layanan}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setIsLayanan(!layanan);
                    }}
                  >
                    <TouchableWithoutFeedback
                    onPress={() => setIsLayanan(!layanan)}
                     >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Kelas Layanan</Text>
                          <Pressable                  
                            value={text.layanan}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isLayanan('VIP')
                              }}
                          >
                            <Text style={styles.textStyle}>VIP</Text>
                          </Pressable>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            value={text.layanan}
                            onPress={() => {
                              isLayanan('Eksekutif')
                              }}                            
                          >
                            <Text style={styles.textStyle}>Eksekutif</Text>
                          </Pressable>
                          <Pressable                  
                            value={text.layanan}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isLayanan('Ekonomi')
                              }}
                          >
                            <Text style={styles.textStyle}>Ekonomi</Text>
                          </Pressable>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>                    
                  </Modal>
                  <Pressable                    
                    onPress={() => setIsLayanan(true)}
                  >
                    <Text style={styles.input}>{text.layanan == ""? " " : text.layanan}</Text>
                  </Pressable>
                </View>
            </View>

            <View style={styles.group}>
              <Text style={styles.title}> Tanggal Keberangkatan</Text>
                <View style={styles.search}>
                  <Icon style={styles.icon} name="calendar-month" size={25} color='#283593' onPress={showDatePicker}/>
                  {/* The button that used to trigger the date picker */}
                  {!isPickerShow && (
                    <View >
                      <Pressable title="Show Picker" color="purple" onPress={showDatePicker} style={styles.input} >
                        <Text onPress={showDatePicker} style={styles.inputDateTime}> 
                        {text.tanggal == ""? " " : text.tanggal}
                          
                        </Text>
                      </Pressable>
                    </View>
                  )}

                  {/* The date picker */}
                  {isPickerShow && (
                    <DateTimePicker
                      value={date}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={true}
                      onChange={onChangeDate}
                      style={styles.datePicker}
                    />
                  )}
                </View>
            </View>

            <View style={styles.group}>
              <Text style={styles.title}> Waktu Keberangkatan</Text>
                <View style={styles.search}>
                  <Icon style={styles.icon} name="clock-time-nine-outline" size={25} color='#283593'/>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={time}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      isTimePicker(!time);
                    }}
                  >
                    <TouchableWithoutFeedback
                    onPress={() => isTimePicker(!time)}
                     >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Waktu Keberangkatan</Text>
                          <Pressable                  
                            value={text.waktu}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isTime('08:00')
                              }}
                          >
                            <Text style={styles.textStyle}>08:00</Text>
                          </Pressable>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            value={text.waktu}
                            onPress={() => {
                              isTime('10:00')
                              }}                            
                          >
                            <Text style={styles.textStyle}>10:00</Text>
                          </Pressable>
                          <Pressable                  
                            value={text.waktu}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isTime('12:00')
                              }}
                          >
                            <Text style={styles.textStyle}>12:00</Text>
                          </Pressable>
                          <Pressable                  
                            value={text.waktu}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isTime('14:00')
                              }}
                          >
                            <Text style={styles.textStyle}>14:00</Text>
                          </Pressable>
                          <Pressable                  
                            value={text.waktu}        
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isTime('16:00')
                              }}
                          >
                            <Text style={styles.textStyle}>16:00</Text>
                          </Pressable>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>                    
                  </Modal>
                  <Pressable                    
                    onPress={() => isTimePicker(true)}
                  >
                    <Text style={styles.input}>{text.waktu == ""? " " : text.waktu}</Text>
                  </Pressable>
                </View>
            </View>

            <View style={styles.group}>
              <Text style={styles.title}> Jumlah Penumpang</Text>
                <View style={styles.search}>
                  <Icon style={styles.icon} name="account-supervisor-outline" size={25} color='#283593'/>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalPenumpang}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalPenumpang(!modalPenumpang);
                    }}
                  >
                    <TouchableWithoutFeedback
                    onPress={() => setModalPenumpang(!modalPenumpang)}
                     >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Penumpang</Text>
                          <Pressable                          
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              isPenumpang('1 Dewasa')
                              }}
                          >
                            <Text style={styles.textStyle}>1 Dewasa</Text>
                          </Pressable>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            value={text.penumpang}
                            onPress={() => {
                              isPenumpang('1 Anak-Anak')
                              }}                            
                          >
                            <Text style={styles.textStyle}>1 Anak-Anak</Text>
                          </Pressable>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                    
                  </Modal>
                  <Pressable
                    
                    onPress={() => setModalPenumpang(true)}
                  >
                    <Text style={styles.input}>{text.penumpang == ""? " " : text.penumpang}</Text>
                  </Pressable>
                </View>
            </View>
            <View>
              <TouchableOpacity
                  style={styles.buttonSubmit}
                  onPress={() =>
                    navigation.navigate('TicketScreen', {
                      text                   
                    })                     
                  }>
                  <Text style={styles.buttonText}>Pesan</Text>
                </TouchableOpacity>
            </View>          
          </View>          
        </SafeAreaView>
      </ScrollView>
      
    </>
  );
};



export default HomeScreen;