import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
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
];
export default function TrackCycle(props) {
  const details = props.route.params.item;
  console.log(details);
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
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              paddingVertical: 12,
              paddingHorizontal: 25,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{width: '60%', paddingHorizontal: 5}}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#EC187C'}}>
                {details.title}
              </Text>
              <Text
                numberOfLines={2}
                style={{paddingVertical: 7, fontSize: 14, color: 'black'}}>
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
              <TouchableOpacity
                key={Math.floor(Math.random() * 199998)}
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'rgba(237,239,244, 0.7)',
                  padding: 15,
                  borderRadius: 10,
                  marginHorizontal: 10,
                  marginTop: 12,
                  alignItems: 'center',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={image.calanderreport}
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
        </ScrollView>
      </ImageBackground>
    </>
  );
}
