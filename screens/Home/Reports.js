import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Reports({item, index}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TrackCycle', {item: item})}
      style={{
        padding: 15,
        backgroundColor: '#edeff466',
        marginHorizontal: 10,
        marginVertical: 5,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image source={item.image} style={{height: 70, width: 70, margin: 5}} />
        <View
          style={{
            justifyContent: 'center',
            marginLeft: 7,
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 16,
              paddingVertical: 3,
            }}>
            {item.name}
          </Text>
          <Text style={{fontSize: 14}}>Last Updated: {item.date}</Text>
          <Text style={{fontSize: 14, color: 'black', paddingVertical: 3}}>
            Know More
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
