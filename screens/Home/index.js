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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingDetails from '../../screens/Common/SettingDetails';
import Alerts from '../Alerts';
import GetStarted from '../Common/GetStarted';
import TrackCycle from '../../screens/Common/TrackCycle';
import MainHome from './MainHome';

const Stack = createNativeStackNavigator();

export default function Home() {
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <>
      <Stack.Navigator initialRouteName="MainHome">
        <Stack.Screen
          name="MainHome"
          component={MainHome}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SettingDetails"
          component={SettingDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Alerts"
          component={Alerts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TrackCycle"
          component={TrackCycle}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </>
  );
}
