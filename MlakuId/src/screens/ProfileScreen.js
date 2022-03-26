import React, {useState} from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import styles from '../styles/ProfileScreenStyle';


const ProfileScreen = ({navigation}) => {  
  const [profile, setProfile]= useState(false);
  const isProfil = (value) => {
    setProfile(false);
  }

  return (
    <SafeAreaView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={profile}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setProfile(!profile);
        }}
      >
        <TouchableWithoutFeedback
        onPress={() => setProfile(!profile)}
          >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Profile</Text>
              <Pressable                                         
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  isProfil('Bantuan')
                  }}
              >
                <Text style={styles.textStyle}>Bantuan</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  isProfil('Detail Profile')
                  }}                            
              >
                <Text style={styles.textStyle}>Detail Profil</Text>
              </Pressable>
              <Pressable                         
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  isProfil('Riwayat Pemesanan')
                  navigation.navigate('HistoryBookingScreen')
                  }}
              >
                <Text style={styles.textStyle}>Riwayat Pemesanan</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>                    
      </Modal>
      <Pressable                    
        onPress={() => setProfile(true)}
      >        
      <Text style={styles.modal}>Eliza-119140002</Text>
      
      </Pressable>
    </SafeAreaView>
  );
};



export default ProfileScreen;