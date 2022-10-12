import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {image} from '../../assets/images';
import {useIsFocused} from '@react-navigation/native';

export default function MenopauseStep4(props) {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('MenopauseResult'), 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image style={{width: 300, height: 300}} source={image.processinggif} />
    </View>
  );
}
