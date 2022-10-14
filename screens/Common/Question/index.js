import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';

export default function Question({handleyes, questions, handleback}) {
  return (
    <>
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={image.loginbg}>
        <ScrollView
          contentContainerStyle={{
            padding: 15,
            paddingBottom: 40,
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Image
              source={questions.qimage}
              style={{height: 120, height: 120}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: '#ec187c',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              paddingHorizontal: '10%',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                margin: 'auto',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {questions.qtext}
            </Text>
            <Text
              style={{
                paddingVertical: 10,
                fontSize: 16,
                textAlign: 'center',
                color: 'white',
                lineHeight: 17,
                fontWeight: '500',
              }}>
              {questions.qdescription}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              //   margin: 'auto',
              paddingVertical: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#222222',
                fontWeight: '700',
                fontSize: 16,
              }}>
              {questions.qtext1}
            </Text>
            <Text
              style={{
                paddingVertical: 10,
                textAlign: 'center',
                color: 'black',
                fontSize: 14,
              }}>
              {questions.qdescription1}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => handleyes()}
              style={{
                width: '49%',
                backgroundColor: 'white',
                alignItems: 'center',
                paddingVertical: 15,
                justifyContent: 'center',
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#ec187c30',
                flexDirection: 'row',
                elevation: 5,
              }}>
              <Image
                source={image.check1}
                style={{height: 15, width: 15, marginHorizontal: 5}}
                resizeMode="contain"
              />
              <Text style={{color: '#EC187C'}}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleyes()}
              style={{
                width: '49%',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#ec187c30',
                flexDirection: 'row',
                elevation: 5,
              }}>
              <Image
                source={image.cross1}
                style={{height: 15, width: 15, marginHorizontal: 5}}
                resizeMode="contain"
              />
              <Text style={{color: '#EC187C'}}>No</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              //   backgroundColor: 'red',
              marginVertical: 30,
            }}>
            <TouchableOpacity
              onPress={() => handleback()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#EC187C',
                borderRadius: 20,
                paddingVertical: 10,

                width: '60%',
              }}>
              <Text style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
          {/* {[0, 1, 2, 3].map(item => {
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
          })} */}
        </ScrollView>
      </ImageBackground>
    </>
  );
}
