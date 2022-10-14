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
    icon: image.ovulationicon,
    name: 'Ovulation / Fertile Days',
    time: '20 - 25 Aug 2022',
  },
];
export default function OvulationTestStep3(props) {
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
              source={image.ovulationtestingstep1}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              backgroundColor: '#ec187c',
              paddingVertical: 8,
              marginVertical: 15,
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Low
            </Text>
            <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>
              Chances of Pregnancy
            </Text>
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
          <View style={{alignItems: 'center', paddingVertical: 15}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('OvulationTestStep4')}
              style={{
                width: '70%',
                backgroundColor: '#EC187C',
                borderRadius: 50,
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#ffffff'}}>
                CLICK TO TAKE THE TEST
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{
                width: '70%',
                backgroundColor: '#EC187C',
                borderRadius: 50,
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#ffffff'}}>BACK</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
