import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';
import {Rating, AirbnbRating} from 'react-native-ratings';
import LatestNews from './LatestNews';
import Reports from './Reports';
import Shop from './Shop';
import Couresel from './Couresel';
import {image} from '../../assets/images/index';
export default function Home() {
  const width = Dimensions.get('window').width;

  return (
    <>
      <ScrollView
        contentContainerStyle={{paddingBottom: 100, backgroundColor: 'white'}}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
          style={{
            flexDirection: 'row',
          }}>
          {[
            {image: image.periodCycle, name: 'Period'},
            {image: image.ovulation, name: 'Ovulation'},
            {image: image.UTI, name: 'UTI'},
            {image: image.menopause, name: 'Menopause'},
            {image: image.support, name: 'Help'},
          ].map(item => {
            return (
              <View style={{alignItems: 'center', paddingHorizontal: 7}}>
                <Image source={item.image} style={{height: 60, width: 60}} />
                <Text style={{color: '#222222'}}>{item.name}</Text>
              </View>
            );
          })}
        </ScrollView>

        <View style={{backgroundColor: '#EDEFF4', paddingVertical: 5}}></View>
        <Carousel
          loop
          width={width}
          height={width / 2}
          // autoPlay={true}
          data={[{image: image.bannerhome1}, {image: image.bannerhome2}]}
          scrollAnimationDuration={500}
          renderItem={({item, index}) => {
            // console.log(item);
            return <Couresel item={item} index={index} />;
          }}
        />
        <View
          style={{
            backgroundColor: '#EDEFF4',
            position: 'relative',
            padding: 20,
            marginVertical: 20,
          }}>
          <View>
            <Text style={{fontSize: 16}}>Next</Text>
            <Text
              style={{
                color: '#222222',
                marginVertical: 2,
                fontSize: 18,
                fontWeight: 'medium',
              }}>
              Period In
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#f76f44',
                  marginRight: 5,
                  borderRadius: 5,
                  alignItems: 'center',
                  paddingHorizontal: 5,
                  minWidth: 45,
                }}>
                <Text style={{color: 'white', fontSize: 12}}>Days</Text>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  8
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#f76f44',
                  borderRadius: 5,
                  alignItems: 'center',
                  paddingVertical: 2,
                  paddingHorizontal: 5,
                  minWidth: 45,
                }}>
                <Text style={{color: 'white', fontSize: 12}}>Hours</Text>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  12
                </Text>
              </View>
            </View>
            <Text
              style={{
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontSize: 16,
              }}>
              Know More
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              right: 0,
              zIndex: 99,
              top: -10,
            }}>
            <Image
              source={image.periodHomeBanner}
              style={{height: 190, width: 190}}
            />
          </View>
        </View>
        <Text
          style={{
            marginVertical: 20,
            paddingHorizontal: 10,
            fontWeight: 'bold',
            fontSize: 16,
            color: 'black',
          }}>
          Shop Now
        </Text>
        <ScrollView horizontal={true}>
          {[0, 1].map((item, index) => {
            return (
              <>
                <Shop item={item} index={index} />
              </>
            );
          })}
        </ScrollView>
        <Text
          style={{
            color: 'black',
            marginVertical: 20,
            paddingHorizontal: 10,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Reports
        </Text>
        {[
          {
            image: image.periodCycle,
            name: 'Track Cycle',
            date: '12 Aug 2022',
          },
          {
            image: image.ovulation,
            name: 'Ovulation Testing',
            date: '10 Aug 2022',
          },
          {
            image: image.UTI,
            name: 'UTI Detection',
            date: '15 Aug 2022',
          },
          {
            image: image.menopause,
            name: 'menopause',
            date: '15 Aug 2022',
          },
        ].map((item, index) => {
          return <Reports item={item} index={index} />;
        })}
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
                <LatestNews />
              </>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
