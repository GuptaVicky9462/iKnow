import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const Otp = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/login-bg.png')}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ec187c',
        justifyContent: 'center',
      }}>
      <View style={{alignSelf: 'center', paddingVertical: 30}}>
        <Image
          source={require('../../assets/images/logo-white.png')}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          color: 'white',
          fontSize: 16,
          paddingBottom: 30,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 25,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
          }}>
          OTP has been sent to your mobile number.
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
          }}>
          Please enter it below.
        </Text>
      </View>
      <OTPInputView
        style={{width: '70%', height: 50, alignSelf: 'center'}}
        pinCount={4}
        code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={code => setCode(code)}
        // codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        // onCodeFilled={code => {
        //   console.log(`Code is ${code}, you are good to go!`);
        // }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('CompleteProfile')}
        style={{
          width: '80%',
          alignSelf: 'center',
          paddingVertical: 15,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 30,
          borderRadius: 50,
        }}>
        <Text style={{fontSize: 18, color: 'black'}}>VERIFY OTP</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default Otp;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
    borderWidth: 2,
  },
});
