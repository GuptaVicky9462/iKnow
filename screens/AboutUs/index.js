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
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
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
            <Text
              style={{
                fontSize: 14,
                color: '#777777',
                paddingVertical: 10,
                lineHeight: 20,
              }}>
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
            <Text
              style={{
                fontSize: 14,
                color: '#777777',
                paddingVertical: 10,
                lineHeight: 20,
              }}>
              Ut faucibus pulvinar elementum integer enim. Et malesuada fames ac
              turpis egestas. Blandit massa enim nec dui. Consequat ac felis
              donec et. Sem integer vitae justo eget magna fermentum iaculis eu.
              Consectetur purus ut faucibus pulvinar. Vel turpis nunc eget
              lorem. Venenatis lectus magna fringilla urna. Fames ac turpis
              egestas maecenas pharetra.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#777777',
                paddingVertical: 10,
                lineHeight: 20,
              }}>
              Tristique senectus et netus et malesuada fames ac. Faucibus ornare
              suspendisse sed nisi lacus. Adipiscing vitae proin sagittis nisl
              rhoncus mattis. Arcu dictum varius duis at. Tristique sollicitudin
              nibh sit amet. Congue quisque egestas diam in arcu. Enim ut tellus
              elementum sagittis vitae et.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};
export default AboutUs;
