import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Reports({item, index}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TrackCycle')}
      style={{padding: 15, backgroundColor: '#edeff466', margin: 5}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={item.image} style={{height: 70, width: 70, margin: 5}} />
        <View style={{justifyContent: 'center', marginLeft: 7}}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 14}}>Last Updated: {item.date}</Text>
          <Text style={{fontSize: 14, color: 'black'}}>Know More</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
