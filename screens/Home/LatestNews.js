import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {image} from '../../assets/images';
const data = [
  {
    title: 'Excepteur Sint Occaecat Cupidatat Non Proident',
    date: '12 Aug 2022',
    description:
      'Consequat interdum varius sit amet mattis vulputate proin nibh nisl...',
  },
  {
    title: 'Velit laoreet id donec ultrices tincidunt.',
    date: '11 Aug 2022',
    description:
      'Consequat interdum varius sit amet mattis vulputate proin nibh nisl...',
  },
  {
    title: 'Volutpat commodo sed egestas egestas.',
    date: '09 Aug 2022',
    description:
      'Consequat interdum varius sit amet mattis vulputate proin nibh nisl...',
  },
  {
    title: 'Consequat interdum varius sit amet.',
    date: '10 Aug 2022',
    description:
      'Consequat interdum varius sit amet mattis vulputate proin nibh nisl...',
  },
];
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
        {data.map((item, index) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('BlogDetails')}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                  width: '50%',
                }}>
                <Image
                  source={image.blog}
                  style={{
                    width: '100%',
                    height: 150,
                    // resizeMode: 'contain',
                  }}
                />
                <View style={{paddingVertical: 5}}>
                  <Text
                    numberOfLines={2}
                    style={{color: '#222222', fontWeight: 'bold'}}>
                    {item.title}
                  </Text>
                  <Text style={{color: '#EC187C'}}>{item.date}</Text>
                  <Text style={{color: '#222222', lineHeight: 18}}>
                    {item.description}
                    <Text style={{color: '#EC187C'}}>Read More</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </>
  );
}
