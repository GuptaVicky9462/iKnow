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
import Feather from 'react-native-vector-icons/Feather';

const data = [
  {label: 'Name', placeholder: 'Name'},
  {label: 'Email', placeholder: 'Email'},
  {label: 'Mobile', placeholder: 'Mobile'},
  {label: 'Date Of Birth', placeholder: 'mm/dd/yyyy'},
  {label: 'Gender', placeholder: 'Gender'},
  {label: 'Select State', placeholder: 'State'},
  {label: 'Select City', placeholder: 'City'},
  {label: 'Address', placeholder: 'Address'},
];

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/login-bg.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          paddingVertical: 20,
        }}>
        <View
          style={{
            width: 110,
            height: 110,
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            borderColor: 'grey',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              elevation: 5,
              backgroundColor: 'white',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 2,
              right: -15,
            }}>
            <Feather size={16} name="edit" color="#F76F44" />
          </View>
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 25,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Personal Details
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
            width: '60%',
            alignSelf: 'center',
            paddingVertical: 12,
            backgroundColor: '#EC187C',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30,
            borderRadius: 50,
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>SAVE DETAILS</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};
export default Profile;
