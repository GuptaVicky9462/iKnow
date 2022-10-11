import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../Common/CustomInput';

const data = [
  {label: 'Your Name', placeholder: 'Name'},
  {label: 'Your Email', placeholder: 'Email'},
  {label: 'Your Mobile', placeholder: 'Mobile'},
  {label: 'Select State', placeholder: 'State'},
  {label: 'Select City', placeholder: 'City'},
  {label: 'Your Age', placeholder: 'Age'},
  {label: 'Select Gender', placeholder: 'Gender'},
];

const CompleteProfile = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/login-bg.png')}
      resizeMode="cover"
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 20,
      }}>
      <ScrollView style={{flex: 1}}>
        <View style={{alignSelf: 'center', paddingVertical: 20}}>
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            paddingBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 25,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
            }}>
            Please enter the details to compelet your profile.
          </Text>
        </View>
        {data.map(item => {
          return (
            <>
              <CustomInput label={item.label} placeholder={item.placeholder} />
            </>
          );
        })}

        <TouchableOpacity
          onPress={() => navigation.navigate('Term_Condition')}
          style={{
            width: '50%',
            alignSelf: 'center',
            paddingVertical: 12,
            backgroundColor: '#EC187C',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30,
            borderRadius: 50,
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};
export default CompleteProfile;
