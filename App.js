import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainScreen from './screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import Login from './screens/Login';
import Otp from './screens/Otp';
import HomeStack from './screens/MainScreen/HomeStack';
import CompleteProfile from './screens/CompleteProfile';
import Term_Condition from './screens/Term_Condition';
import Alert from './screens/Alerts';
import SettingDetails from './screens/Common/SettingDetails';
import GetStarted from './screens/Common/GetStarted';
import TrackCycle from './screens/Common/TrackCycle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BlogDetails from './screens/Common/BlogDetails';
import AboutUs from './screens/AboutUs';

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState('');
  const getData = async () => {
    console.log('getDAta');
    const data = await AsyncStorage.getItem('key');
    setData(data);
  };
  useEffect(() => {
    LogBox.ignoreAllLogs();
    getData();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {data != 'mainScreen' ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CompleteProfile"
              component={CompleteProfile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Term_Condition"
              component={Term_Condition}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <Stack.Screen
            name="MainScreen"
            component={props => <MainScreen {...props} />}
            options={{headerShown: false}}
          />
        )}

        {/* <Stack.Screen
          name="SettingDetails"
          component={SettingDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={props => <MainScreen {...props} />}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Alert"
          component={Alert}
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
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
