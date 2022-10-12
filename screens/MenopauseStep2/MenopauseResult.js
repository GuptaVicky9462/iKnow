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
export default function MenopauseResult(props) {
  return (
    <>
      <ImageBackground
        style={{flex: 1, backgroundColor: 'rgb(246,246,246)'}}
        source={image.loginbg}>
        <ScrollView
          style={{padding: 16}}
          contentContainerStyle={{paddingBottom: 30}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, color: '#222222'}}>
              Results: 18 Aug 2022
            </Text>
          </View>
          <View style={{paddingVertical: 10, alignItems: 'center'}}>
            <Image
              source={image.ovelationkitresult1}
              style={{height: 200, width: 250}}
              resizeMode="contain"
            />
          </View>
          <Text>
            Your menopause could be starting and you should consult your
            physician
          </Text>
          <View
            style={{
              paddingVertical: 20,
              alignItems: 'center',
              // flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                width: '80%',
                alignItems: 'center',
                borderRadius: 10,
                borderColor: '#ec187c',
                borderWidth: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16}}>SHARE RESULT </Text>
              <Image
                source={image.share}
                style={{height: 30, width: 30}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Assesment')}
            style={{
              backgroundColor: '#ec187c',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>RETAKE TEST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MenoPauseDashboard')}
            style={{
              backgroundColor: '#ec187c',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              marginVertical: 20,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>
              MENOPAUSE DASHBOARD
            </Text>
          </TouchableOpacity>
          {/* <View
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
          </View> */}
        </ScrollView>
      </ImageBackground>
    </>
  );
}
