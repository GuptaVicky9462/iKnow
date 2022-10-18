import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../Common/CustomInput';

const Login = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/images/login-bg.png')}
      resizeMode="cover"
      style={{
        flex: 1,
        backgroundColor: '#ec187c',
        justifyContent: 'center',
      }}>
      <View style={{alignSelf: 'center', paddingVertical: 40}}>
        <Image
          source={require('../../assets/images/logo-white.png')}
          resizeMode="cover"
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          onBlur={() => setIsActive(false)}
          onFocus={() => setIsActive(true)}
          style={{
            width: '85%',
            backgroundColor: isActive ? '#ffffff' : '#ec187c',
            fontSize: 16,
            color: 'black',
            marginVertical: 10,
            marginTop: 10,
          }}
          mode="outlined"
          outlineColor="#ffffff"
          activeOutlineColor="#ced4da"
          value={text}
          placeholder="Mobile"
          onChangeText={text => {
            setText(text);
          }}
        />
        <View
          style={{
            backgroundColor: '#ec187c',
            width: 'auto',
            maxWidth: '100%',
            position: 'absolute',
            padding: 6,
            left: 50,
          }}>
          <Text style={{color: 'white'}}>Enter Your Mobile Number</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Otp')}
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
        <Text style={{fontSize: 18, color: 'black'}}>GET OTP</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default Login;
