import {View, Text, Image} from 'react-native';
import React from 'react';
import {image} from '../../assets/images/index';

export default function PeriodReminder() {
  return (
    <View
      style={{
        backgroundColor: '#EDEFF4',
        position: 'relative',
        padding: 20,
        marginVertical: 20,
      }}>
      <View>
        <Text style={{fontSize: 14}}>Next</Text>
        <Text
          style={{
            color: '#222222',
            marginVertical: 2,
            fontSize: 18,
            fontWeight: '500',
          }}>
          Period In
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#f76f44',
              marginRight: 5,
              paddingVertical: 2,
              borderRadius: 5,
              alignItems: 'center',
              paddingHorizontal: 5,
              minWidth: 45,
            }}>
            <Text style={{color: 'white', fontSize: 12}}>Days</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              8
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#f76f44',
              borderRadius: 5,
              alignItems: 'center',
              paddingVertical: 2,
              paddingHorizontal: 5,
              minWidth: 45,
            }}>
            <Text style={{color: 'white', fontSize: 12}}>Hours</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              12
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginVertical: 5,
            textDecorationLine: 'underline',
            fontSize: 16,
          }}>
          Know More
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          right: 0,
          zIndex: 99,
          top: -10,
        }}>
        <Image
          source={image.periodHomeBanner}
          style={{height: 190, width: 190}}
        />
      </View>
    </View>
  );
}
