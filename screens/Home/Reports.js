import {View, Text, Image} from 'react-native';
import React from 'react';
export default function Reports({item, index}) {
  return (
    <View style={{padding: 15, backgroundColor: '#edeff466', margin: 5}}>
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
    </View>
  );
}
