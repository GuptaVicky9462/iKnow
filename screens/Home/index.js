import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export default function Home() {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <Feather size={30} name="menu" />
        </TouchableOpacity>
      </View>
    </>
  );
}
