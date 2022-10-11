import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import MainScreen from './screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import Login from './screens/Login';
import Otp from './screens/Otp';
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
        {/* <Stack.Screen
          name="MainScreen"
          component={props => <MainScreen {...props} />}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
