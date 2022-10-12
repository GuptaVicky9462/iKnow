import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images/index';
import {useNavigation} from '@react-navigation/native';

export default function GetStarted({
  icon = null,
  title = 'Title',
  description = 'Description',
  navigate = '',
}) {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground style={{flex: 1, padding: 15}} source={image.loginbg}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image style={{width: 160, height: 160}} source={icon} />
          </View>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#c3c1c1',
              marginBottom: 16,
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#222222'}}>
              {title}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 16,
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 16, color: '#222222', textAlign: 'center'}}>
              {description}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigate)}
            style={{
              backgroundColor: '#EC187C',
              borderRadius: 15,
              height: 36,
              margin: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#ffffff', fontSize: 16, fontWeight: '700'}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
