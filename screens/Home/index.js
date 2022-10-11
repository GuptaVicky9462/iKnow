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
import {useNavigation} from '@react-navigation/native';
import {image} from '../../assets/images/index';
const TabData = [
  {
    icon: image.periodCycle,
    name: 'Period',
    title: 'Track Your Cycle',
    description:
      'Keeping track of your period and monthly changes can aid family planning, pregnancy prevention, and general health.',
  },
  {
    icon: image.ovulation,
    name: 'Ovulation',
    title: 'Start Your Ovulation Testing',
    description:
      'Start your exciting and beautiful journey of parenthood with the support of i-know ovulation testing strip. Experience the joy of finding out your most fertile days to get pregnant with i-know.',
  },
  {
    icon: image.UTI,
    name: 'UTI',
    title: 'Start Your UTI Detection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: image.menopause,
    name: 'Menopause',
    title: 'Menopause',
    description: `Menopause is a point in time 12 months after a woman's last period. The years leading up to that point, when women may have changes in their monthly cycles, hot flashes, or other symptoms, are called the menopausal transition or perimenopause. The menopausal transition most often begins between ages 45 and 55.`,
  },
  {icon: image.support, name: 'Help'},
];
const ReportsData = [
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
];
export default function Home() {
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();

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
          {TabData?.map(item => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('GetStarted', {item: item})}
                style={{alignItems: 'center', paddingHorizontal: 7}}>
                <Image source={item.icon} style={{height: 60, width: 60}} />
                <Text style={{color: '#222222'}}>{item.name}</Text>
              </TouchableOpacity>
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
                  paddingVertical: 2,
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
        {ReportsData.map((item, index) => {
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
