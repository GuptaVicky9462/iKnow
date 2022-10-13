import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {image} from '../../assets/images';
export default function LatestNews() {
  const navigation = useNavigation();
  return (
    <>
      <Text
        style={{
          marginVertical: 20,
          paddingHorizontal: 10,
          fontWeight: 'bold',
          fontSize: 16,
          color: 'black',
        }}>
        Latest News
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
        }}>
        {[0, 1, 2, 4].map((item, index) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('BlogDetails')}
                style={{
                  paddingHorizontal: 8,
                  width: '50%',
                }}>
                <Image
                  source={image.blog}
                  style={{
                    width: '100%',
                    height: 200,
                    resizeMode: 'contain',
                  }}
                />
                <Text style={{color: '#222222', fontWeight: 'bold'}}>
                  Morbi tincidunt ornare massa eget egestas purus.
                </Text>
                <Text style={{color: '#EC187C'}}>12 Aug 2022</Text>
                <Text style={{color: '#222222'}}>
                  Consequat interdum varius sit amet mattis vulputate proin nibh
                  nisl...
                  <Text style={{color: '#EC187C'}}>Read More</Text>
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </>
  );
}
