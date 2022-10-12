import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {image} from '../../assets/images';

const data = [
  {
    icon: image.check,
    name: 'Your next period is likely to start',
    time: '12 Sep 2022',
  },
  {
    icon: image.check,
    name: 'Your fertile period for this month is to check with ovulation testing strips between',
    time: '19 Aug 2022 to 29 Aug 2022',
  },
];
export default function TrackCycleResult(props) {
  return (
    <>
      <ImageBackground
        style={{flex: 1, backgroundColor: 'rgb(246,246,246)'}}
        source={image.loginbg}>
        <ScrollView
          style={{padding: 16}}
          contentContainerStyle={{paddingBottom: 30}}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              style={{width: 150, height: 150}}
              source={image.trackcycleresult}
            />
          </View>
          {data?.map(element => {
            return (
              <TouchableOpacity
                key={Math.floor(Math.random() * 199998)}
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'rgba(237,239,244, 0.7)',
                  padding: 15,
                  borderRadius: 10,
                  marginTop: 12,
                  alignItems: 'center',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={element.icon}
                  />
                </View>
                <View
                  style={{
                    paddingHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#EC187C',
                    }}>
                    {element.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 16,
                      paddingVertical: 5,
                    }}>
                    {element.time}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
          <View>
            <Image
              resizeMode="contain"
              style={{
                width: '100%',
                height: 600,
                borderRadius: 10,
                marginVertical: 20,
              }}
              source={image.trackcycleresultjpg}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
