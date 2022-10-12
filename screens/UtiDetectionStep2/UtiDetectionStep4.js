import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {image} from '../../assets/images';
import React from 'react';

export default function UtiDetectionStep4(props) {
  return (
    <>
      <ImageBackground style={{flex: 1}} source={image.loginbg}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image style={{width: 150, height: 150}} source={image.camera} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
            }}>
            <Text
              style={{
                paddingVertical: 3,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Day 2: 18 Aug 2022
            </Text>
            <Text style={{paddingVertical: 3, fontSize: 16}}>
              Click Picture or upload from the device
            </Text>
          </View>
          <View style={{paddingVertical: 15, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('UtiDetectionStep5')}
              style={{
                width: '90%',
                backgroundColor: '#EC187C',
                borderRadius: 50,
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#ffffff'}}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{
                width: '60%',
                backgroundColor: '#EC187C',
                borderRadius: 50,
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#ffffff'}}>BACK</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
