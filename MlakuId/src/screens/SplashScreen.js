import React , { useEffect }from "react";
import {Text,
View, 
SafeAreaView,
Image} from "react-native";
import styles from '../styles/SplashScreenStyle';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('BottomTab');
        }, 5000);
    }, [navigation]) 

    return (
        <SafeAreaView style={styles.background}>         
            <Image 
                source={require('../assets/Logo.png')}
                style={styles.logo}
            />
            <Text style={styles.by}>
                Eliza Maharani - 119140002
            </Text>
        </SafeAreaView>
    );
};

export default SplashScreen;