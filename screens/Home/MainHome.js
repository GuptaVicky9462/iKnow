import {View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import LatestNews from './LatestNews';
import Reports from './Reports';
import Shop from './Shop';
import Couresel from './Couresel';
import {image} from '../../assets/images/index';
import PeriodReminder from './PeriodReminder';
import ScrollTab from './ScrollTab';

export default function MainHome() {
  const width = Dimensions.get('window').width;

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 100, backgroundColor: 'white'}}>
      <ScrollTab />
      <View style={{backgroundColor: '#EDEFF4', paddingVertical: 5}}></View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        data={[{image: image.bannerhome1}, {image: image.bannerhome2}]}
        scrollAnimationDuration={500}
        renderItem={({item, index}) => {
          return <Couresel item={item} index={index} />;
        }}
      />
      <PeriodReminder />
      <Shop />
      <Reports />
      <LatestNews />
    </ScrollView>
  );
}
