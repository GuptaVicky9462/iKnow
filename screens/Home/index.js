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
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingDetails from '../../screens/Common/SettingDetails';
import Alerts from '../Alerts';
import GetStarted from '../Common/GetStarted';
import TrackCycle from '../../screens/Common/TrackCycle';
import MainHome from './MainHome';
import BlogDetails from '../Common/BlogDetails';
import AboutUs from '../AboutUs';

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
        <Stack.Screen
          name="BlogDetails"
          component={BlogDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
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
