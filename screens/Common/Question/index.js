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
              source={image.Irrregularcycle}
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
            }}>
            <Text style={{fontSize: 18, color: 'white', margin: 'auto'}}>
              {questions.qtext}
            </Text>
            <Text style={{paddingVertical: 10, fontSize: 14}}>
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
            <Text>{questions.qtext1}</Text>
            <Text style={{paddingVertical: 10}}>{questions.qdescription1}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => handleyes()}
              style={{width: '49%', backgroundColor: 'red'}}>
              <Text>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleyes()}
              style={{width: '49%', backgroundColor: 'green'}}>
              <Text>No</Text>
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
                backgroundColor: 'green',

                width: '50%',
              }}>
              <Text>Back</Text>
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
