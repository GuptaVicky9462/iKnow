import {View, Text, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Rating} from 'react-native-ratings';

export default function Shop({item, index}) {
  return (
    <View
      key={index}
      style={{
        margin: 10,
        width: 170,
        position: 'relative',
      }}>
      <View
        style={{
          elevation: 1,
          borderRadius: 5,
        }}>
        <Image
          source={require('../../assets/images/product.png')}
          style={{height: 170, width: 170}}
        />
      </View>

      <Rating
        type="custom"
        ratingColor="orange"
        ratingBackgroundColor="#c8c7c8"
        ratingCount={5}
        imageSize={20}
        style={{
          paddingVertical: 10,
          alignItems: 'flex-start',
        }}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: 'black',
          flexWrap: 'wrap',
        }}>
        i-Know ovulation testing
      </Text>
      <Text style={{color: 'black'}}>Strips</Text>
      <Text style={{color: 'black'}}>₹ 549.00 ₹</Text>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            textDecorationLine: 'line-through',
          }}>
          650.00
        </Text>
        <Text style={{color: '#F76F44'}}>{'  '}20%</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          right: 13,
          top: 10,
          zIndex: 99,
          borderRadius: 50,
          padding: 8,
        }}>
        <Feather size={15} name="heart" color="black" />
      </View>
    </View>
  );
}
