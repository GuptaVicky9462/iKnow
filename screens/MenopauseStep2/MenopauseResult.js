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
              <Text style={{fontSize: 16}}>SHARE RESULT</Text>
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
            onPress={() => props.navigation.navigate('MenopauseDashbord')}
            style={{
              backgroundColor: '#ec187c',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              marginVertical: 20,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>
              MENOPAUSE DASHBORD
            </Text>
          </TouchableOpacity>
          <LatestNews />
        </ScrollView>
      </ImageBackground>
    </>
  );
}
