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

export default function OvulationQuestion2() {
  return (
    <ImageBackground source={image.loginbg} style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
          padding: 15,
          alignItems: 'center',
          //   flex: 1,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#222222',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Select The Length You Of Your Period.
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#222222',
            fontSize: 14,
            paddingVertical: 10,
          }}>
          (Bleeding usually lasts between 4-7 days)
        </Text>
        <Image
          source={image.trackcyclecalander3}
          style={{width: '100%', height: 600}}
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
