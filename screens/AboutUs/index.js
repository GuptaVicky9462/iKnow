import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {image} from '../../assets/images';

const AboutUs = () => {
  return (
    <>
      <ImageBackground
        source={image.loginbg}
        style={{paddingHorizontal: 16, paddingVertical: 8}}>
        <ScrollView contentContainerStyle={{paddingBottom: 30}}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              Introduction
            </Text>
          </View>
          <View style={{paddingVertical: 16, marginVertical: 10}}>
            <Image style={{width: '100%', height: 145}} source={image.logo} />
          </View>
          <View>
            <Text style={{fontSize: 14, color: '#222222', marginBottom: 8}}>
              Duis aute irure dolor in reprehenderit
            </Text>
            <Text style={{fontSize: 14, color: '#777777', paddingVertical: 10}}>
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
            <Text style={{fontSize: 14, color: '#777777', paddingVertical: 10}}>
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
            <Text style={{fontSize: 14, color: '#777777', paddingVertical: 10}}>
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
};
export default AboutUs;
