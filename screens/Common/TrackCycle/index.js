import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';

const data = [
  {
    name: 'Positive',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Positive',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
];
export default function TrackCycle() {
  return (
    <>
      <ImageBackground style={{flex: 1}} source={image.loginbg}>
        <ScrollView
          style={{padding: 16}}
          contentContainerStyle={{paddingBottom: 100}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              paddingVertical: 12,
              paddingHorizontal: 25,
              borderRadius: 7,
              alignItems: 'center',
            }}>
            <View style={{width: '60%', paddingHorizontal: 5}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#EC187C'}}>
                OVULATION REPORTS
              </Text>
              <Text numberOfLines={2} style={{paddingVertical: 10}}>
                Click on the below tabs to check your previous result.
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 85, height: 85}}
                source={image.ovulationicon}
              />
            </View>
          </View>
          {data?.map(element => {
            return (
              <View
                key={Math.floor(Math.random() * 199998)}
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'red',
                  paddingVertical: 12,
                  paddingHorizontal: 25,
                  borderRadius: 7,
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    style={{height: 21, width: 21}}
                    source={image.calanderreport}
                  />
                </View>
                <View
                  style={{
                    width: '60%',
                    paddingHorizontal: 5,
                    marginLeft: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#EC187C',
                    }}>
                    {element.name}
                  </Text>
                  <Text numberOfLines={2}>{element.time}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground>
    </>
  );
}
