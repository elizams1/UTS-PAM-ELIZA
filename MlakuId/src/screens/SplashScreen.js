import React , { useEffect }from "react";
import {
Text,
SafeAreaView,
StatusBar,
Image} from "react-native";
import styles from '../styles/SplashScreenStyle';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.replace('BottomTab');
    }, 1000);
  }, [navigation]) 

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#283593" />
    <SafeAreaView style={styles.background}>         
        <Image 
            source={require('../assets/Logo.png')}
            style={styles.logo}
        />
        <Text style={styles.by}>
            Eliza Maharani - 119140002
        </Text>
    </SafeAreaView>
    </>
  );
};

export default SplashScreen;