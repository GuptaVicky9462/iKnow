import {Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {image} from '../../assets/images/index';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
const TabData = [
  {
    icon: image.periodCycle,
    name: 'Period',
    navigate: 'TrackCycleStep1',
  },
  {
    icon: image.ovulation,
    name: 'Ovulation',
    navigate: 'OvulationTestStep1',
  },
  {
    icon: image.UTI,
    name: 'UTI',
    navigate: 'UtiDetectionStep1',
  },
  {
    icon: image.menopause,
    name: 'Menopause',
    navigate: 'MenopauseStep1',
  },
  {
    icon: image.support,
    name: 'Help',
    navigate: 'MenopauseStep1',
  },
];

export default function ScrollTab() {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        paddingBottom: 10,
      }}
      style={{
        flexDirection: 'row',
      }}>
      {TabData?.map(item => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.navigate)}
            style={{alignItems: 'center', paddingHorizontal: 7}}>
            <Image source={item.icon} style={{height: 60, width: 60}} />
            <Text style={{color: '#222222'}}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
