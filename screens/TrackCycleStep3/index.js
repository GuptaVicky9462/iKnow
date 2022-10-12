import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {image} from '../../assets/images';
import {useIsFocused} from '@react-navigation/native';

export default function TrackCycleStep3(props) {
  const focus = useIsFocused();

  useEffect(() => {
    setTimeout(() => props.navigation.navigate('TrackCycleResult'), 3000);
  }, [focus]);
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
