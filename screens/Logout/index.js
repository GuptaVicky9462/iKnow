import {View, Image, ImageBackground, ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {image} from '../../assets/images';
import {AuthContext} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logout(props) {
  const {setToken} = React.useContext(AuthContext);

  const logout = async () => {
    const t = await AsyncStorage.removeItem('routes');
    console.log('tttttt', t);
    setToken(null);
  };
  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 3000);
  }, []);
  return (
    <ImageBackground
      source={image.loginbg}
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 180, height: 100}}
        resizeMode="contain"
        source={image.logo}
      />
      <Text
        style={{
          fontSize: 22,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#222222',
          paddingHorizontal: '5%',
          lineHeight: 35,
          paddingVertical: 20,
        }}>
        Thank You For Using Our App You Are Logout Succesfully.
      </Text>
    </ImageBackground>
  );
}
