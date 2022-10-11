import {View, Text, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import Header from '../MainScreen/HomeStack/Header';

export default function Alert() {
  return (
    <>
      <Header />

      {/* <ScrollView contentContainerStyle={{flex: 1, padding: 20}}> */}
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../../assets/images/login-bg.png')}>
        <ScrollView
          contentContainerStyle={{
            padding: 15,
            paddingBottom: 40,
          }}>
          {[0, 1, 2, 3].map(item => {
            return (
              <>
                <View
                  style={{
                    padding: 15,
                    backgroundColor: 'rgba(255,255,255,0.7)',

                    borderRadius: 5,
                    marginBottom: 5,
                  }}>
                  <Text
                    style={{
                      color: '#222222',
                      fontWeight: 'bold',
                      fontSize: 14,
                    }}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </Text>
                  <Text
                    style={{
                      color: '#222222',
                      fontSize: 14,
                      marginVertical: 5,
                    }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <Text
                    style={{
                      color: '#EC187C',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    5 Sep, 2022
                  </Text>
                </View>
              </>
            );
          })}
        </ScrollView>
      </ImageBackground>
      {/* </ScrollView> */}
    </>
  );
}
