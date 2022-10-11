import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
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

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
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
          name="HomeStack"
          component={HomeStack}
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
        <Stack.Screen
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
