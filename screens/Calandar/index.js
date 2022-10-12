import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {image} from '../../assets/images';

export default function Calendar() {
  return (
    <ImageBackground
      style={{flex: 1, backgroundColor: 'rgb(246,246,246)'}}
      source={image.loginbg}>
      <ScrollView
        style={{padding: 16}}
        contentContainerStyle={{paddingBottom: 30}}>
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
      </ScrollView>
    </ImageBackground>
  );
}
