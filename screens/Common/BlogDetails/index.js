import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';

export default function BlogDetails() {
  return (
    <>
      <ImageBackground
        source={image.loginbg}
        style={{paddingHorizontal: 16, paddingVertical: 8}}>
        <ScrollView contentContainerStyle={{paddingBottom: 30}}>
          <View style={{paddingVertical: 16}}>
            <Image
              style={{width: '100%', height: 246, borderRadius: 5}}
              source={image.blog}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: '#222222',
                fontWeight: 'bold',
                marginVertical: 18,
              }}>
              Excepteur sint occaecat cupidatat non proident
            </Text>
            <Text style={{color: '#222222', fontSize: 16, paddingTop: 5}}>
              Introduction
            </Text>
            <Text style={{fontSize: 16, color: '#777777', paddingVertical: 3}}>
              Ut porttitor leo a diam sollicitudin. Nisi scelerisque eu ultrices
              vitae auctor eu augue ut. Quis eleifend quam adipiscing vitae.
              Euismod lacinia at quis risus sed vulputate odio ut. Tristique
              risus nec feugiat in fermentum. Erat imperdiet sed euismod nisi
              porta lorem mollis. Molestie at elementum eu facilisis sed odio
              morbi. Ipsum nunc aliquet bibendum enim. Ut porttitor leo a diam
              sollicitudin. Nisi scelerisque eu ultrices vitae auctor eu augue
              ut. Quis eleifend quam adipiscing vitae. Euismod lacinia at quis
              risus sed vulputate odio ut. Tristique risus nec feugiat in
              fermentum. Erat imperdiet sed euismod nisi porta lorem mollis.
              Molestie at elementum eu facilisis sed odio morbi. Ipsum nunc
              aliquet bibendum enim.
            </Text>
            <Text style={{color: '#222222', fontSize: 16, paddingTop: 5}}>
              Pharetra vel turpis nunc eget.
            </Text>
            <Text style={{fontSize: 14, color: '#777777', paddingVertical: 3}}>
              Ut porttitor leo a diam sollicitudin. Nisi scelerisque eu ultrices
              vitae auctor eu augue ut. Quis eleifend quam adipiscing vitae.
              Euismod lacinia at quis risus sed vulputate odio ut. Tristique
              risus nec feugiat in fermentum. Erat imperdiet sed euismod nisi
              porta lorem mollis. Molestie at elementum eu facilisis sed odio
              morbi. Ipsum nunc aliquet bibendum enim. Ut porttitor leo a diam
              sollicitudin. Nisi scelerisque eu ultrices vitae auctor eu augue
              ut. Quis eleifend quam adipiscing vitae. Euismod lacinia at quis
              risus sed vulputate odio ut. Tristique risus nec feugiat in
              fermentum. Erat imperdiet sed euismod nisi porta lorem mollis.
              Molestie at elementum eu facilisis sed odio morbi. Ipsum nunc
              aliquet bibendum enim.
            </Text>
            <Text style={{color: '#222222', fontSize: 16, paddingTop: 5}}>
              Egestas sed sed risus pretium quam.
            </Text>
            <Text style={{fontSize: 14, color: '#777777', paddingVertical: 3}}>
              Ut porttitor leo a diam sollicitudin. Nisi scelerisque eu ultrices
              vitae auctor eu augue ut. Quis eleifend quam adipiscing vitae.
              Euismod lacinia at quis risus sed vulputate odio ut. Tristique
              risus nec feugiat in fermentum. Erat imperdiet sed euismod nisi
              porta lorem mollis. Molestie at elementum eu facilisis sed odio
              morbi. Ipsum nunc aliquet bibendum enim. Ut porttitor leo a diam
              sollicitudin. Nisi scelerisque eu ultrices vitae auctor eu augue
              ut. Quis eleifend quam adipiscing vitae. Euismod lacinia at quis
              risus sed vulputate odio ut. Tristique risus nec feugiat in
              fermentum. Erat imperdiet sed euismod nisi porta lorem mollis.
              Molestie at elementum eu facilisis sed odio morbi. Ipsum nunc
              aliquet bibendum enim.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
