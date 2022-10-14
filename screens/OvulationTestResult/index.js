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
import LatestNews from '../Home/LatestNews';

export default function OvulationTestResult(props) {
  return (
    <>
      <ImageBackground
        style={{flex: 1, backgroundColor: 'rgb(246,246,246)'}}
        source={image.loginbg}>
        <ScrollView
          style={{padding: 16}}
          contentContainerStyle={{paddingBottom: 30}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, color: '#222222', fontWeight: '600'}}>
              Results fo Day 2: 18 Aug 2022
            </Text>
          </View>
          <View style={{paddingVertical: 10, alignItems: 'center'}}>
            <Image
              source={image.ovelationkitresult1}
              style={{height: 250, width: 300}}
              resizeMode="contain"
            />
          </View>
          <Text>
            Positive: Two pink lines in C & T indicate the beginning of the
            fertile days
          </Text>
          <Text style={{paddingVertical: 10}}>
            Negative: A single line in C indicates that the fertile days have
            not started. Invalid: No line on the kit indicates an invalid
            result. If so, test again using a fresh kit.
          </Text>
          <Text>
            **Pink line may be dark/faint as different women have varying
            concentration of LH hormone
          </Text>
          <View
            style={{
              paddingVertical: 20,
              alignItems: 'center',
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
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#222222',
                  marginRight: 5,
                }}>
                SHARE RESULT
              </Text>
              <Image
                source={image.share}
                style={{height: 30, width: 30}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          {/*  */}
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('OvulationConsolidatedResult')
            }
            style={{
              backgroundColor: '#ec187c',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              borderRadius: 15,
              marginVertical: 20,
            }}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
              VIEW FULL RESULT
            </Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('OvulationTestStep4')}
            style={{
              backgroundColor: '#ec187c',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
              RETAKE TEST
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('OvulationDashbord')}
            style={{
              backgroundColor: '#ec187c',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              marginVertical: 20,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
              OVULATION DASHBORD
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
