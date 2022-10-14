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

export default function UtiResult(props) {
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
              Results: 18 Aug 2022
            </Text>
          </View>
          <View style={{paddingVertical: 10, alignItems: 'center'}}>
            <Image
              source={image.ovelationkitresult1}
              style={{height: 250, width: 300}}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{paddingVertical: 10, color: '#777777', fontWeight: '500'}}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text
            style={{paddingVertical: 10, color: '#777777', fontWeight: '500'}}>
            Tellus in hac habitasse platea dictumst vestibulum rhoncus est.
            Interdum varius sit amet mattis vulputate enim nulla aliquet
            porttitor. Egestas diam in arcu cursus euismod quis viverra nibh.
            Posuere ac ut consequat semper viverra nam libero justo laoreet.
            Accumsan sit amet nulla facilisi. Et sollicitudin ac orci phasellus
            egestas tellus.
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
                  color: '#222222',
                  fontWeight: '600',
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate('UtiDetectionStep3')}
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
            onPress={() => props.navigation.navigate('UtiDashbord')}
            style={{
              backgroundColor: '#ec187c',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              marginVertical: 20,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>UTI DASHBORD</Text>
          </TouchableOpacity>
          <LatestNews />
        </ScrollView>
      </ImageBackground>
    </>
  );
}
