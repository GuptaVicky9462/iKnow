import {View, Text, Image} from 'react-native';
import React from 'react';
export default function LatestNews() {
  return (
    <View
      style={{
        paddingHorizontal: 8,
        width: '50%',
      }}>
      <Image
        source={require('../../assets/images/blog.png')}
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
        Consequat interdum varius sit amet mattis vulputate proin nibh nisl...
        <Text style={{color: '#EC187C'}}>Read More</Text>
      </Text>
    </View>
  );
}
