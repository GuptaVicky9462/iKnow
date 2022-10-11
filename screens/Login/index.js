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

const Login = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();
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

      <TextInput
        label="Enter Your Mobile Number"
        value={text}
        mode="outlined"
        outlineColor="white"
        style={{
          width: '80%',
          alignSelf: 'center',
          backgroundColor: '#ec187c',
        }}
        activeOutlineColor="white"
        onChangeText={text => setText(text)}
      />
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
