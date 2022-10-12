import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {image} from '../../assets/images';
import TrackCycleFormBox from '../Common/TrackCycleFormBox';
import {useNavigation} from '@react-navigation/native';

const UtiDetectionStep2 = () => {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground style={{flex: 1}} source={image.loginbg}>
        <ScrollView style={{paddingVertical: 10, paddingHorizontal: 15}}>
          <TrackCycleFormBox
            placeholder="32"
            title="What is your age ?"
            icon={image.UTI}
          />
          <View style={{alignItems: 'center', paddingVertical: 15}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Processing')}
              style={{
                width: '50%',
                backgroundColor: '#EC187C',
                borderRadius: 50,
                paddingVertical: 10,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#ffffff'}}>NEXT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: '50%',
                backgroundColor: '#EC187C',
                borderRadius: 50,
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
};
export default UtiDetectionStep2;
