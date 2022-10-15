import {View, Image} from 'react-native';
import React from 'react';

export default function Couresel({item, index}) {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 'auto', resizeMode: 'contain'}}
        source={item.image}
      />
    </View>
  );
}
