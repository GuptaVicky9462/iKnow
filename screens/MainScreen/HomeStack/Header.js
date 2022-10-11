import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', paddingVertical: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather size={25} name="menu" color="black" />
          </TouchableOpacity>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={{height: 50, width: 90, marginLeft: 15}}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Alert')}>
          <Ionicons size={25} name="notifications-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
