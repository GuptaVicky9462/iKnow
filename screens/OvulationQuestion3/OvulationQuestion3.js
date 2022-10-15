import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {image} from '../../assets/images';

export default function OvulationQuestion3() {
  return (
    <ImageBackground source={image.loginbg} style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
          padding: 15,
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#222222',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Select Start Date Of Your Last Period.
        </Text>
        <Image
          source={image.trackcyclecalander3}
          style={{width: '100%', height: 600, marginVertical: 10}}
          resizeMode="contain"
        />
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#EC187C',
            width: '50%',
            paddingVertical: 10,
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 16}}>
              BACK
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
