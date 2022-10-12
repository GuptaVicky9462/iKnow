import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {image} from '../../assets/images/index';

const ReportsData = [
  {
    image: image.periodCycle,
    name: 'Track Cycle',
    date: '12 Aug 2022',
    navigate: 'TrackCycleDashbord',
  },
  {
    image: image.ovulation,
    name: 'Ovulation Testing',
    date: '10 Aug 2022',
    navigate: 'OvulationDashbord',
  },
  {
    image: image.UTI,
    name: 'UTI Detection',
    date: '15 Aug 2022',
    navigate: 'UtiDashbord',
  },
  {
    image: image.menopause,
    name: 'menopause',
    date: '15 Aug 2022',
    navigate: 'MenopauseDashbord',
  },
];
export default function Reports() {
  const navigation = useNavigation();
  return (
    <>
      <Text
        style={{
          color: 'black',
          marginVertical: 20,
          paddingHorizontal: 10,
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Reports
      </Text>
      {ReportsData.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.navigate)}
            style={{
              padding: 15,
              backgroundColor: '#edeff466',
              marginHorizontal: 10,
              marginVertical: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={item.image}
                style={{height: 70, width: 70, margin: 5}}
              />
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
                <Text
                  style={{fontSize: 14, color: 'black', paddingVertical: 3}}>
                  Know More
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
