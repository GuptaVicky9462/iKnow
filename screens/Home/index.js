import {Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingDetails from '../../screens/Common/SettingDetails';
import Alerts from '../Alerts';
import TrackCycle from '../../screens/Common/TrackCycle';
import MainHome from './MainHome';
import BlogDetails from '../Common/BlogDetails';
import AboutUs from '../AboutUs';
import TrackCycleStep1 from '../TrackCycleStep1';
import TrackCycleStep2 from '../TrackCycleStep2';
import TrackCycleStep3 from '../TrackCycleStep3';
import TrackCycleResult from '../TrackCycleResult';
import OvulationTestStep1 from '../OvulationTestStep1';
import OvulationTestStep2 from '../OvulationTestStep2';
import OvulationTestStep3 from '../OvulationTestStep3';
import OvulationTestStep4 from '../OvulationTestStep4';
import UtiDetectionStep1 from '../UtiDetectionStep1';
import UtiDetectionStep2 from '../UtiDetectionStep2';
import MenopauseStep1 from '../MenopauseStep1';
import MenopauseStep2 from '../MenopauseStep2';
const Stack = createNativeStackNavigator();

export default function Home() {
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
        <Stack.Screen
          name="TrackCycleStep1"
          component={TrackCycleStep1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TrackCycleStep2"
          component={TrackCycleStep2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TrackCycleStep3"
          component={TrackCycleStep3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TrackCycleResult"
          component={TrackCycleResult}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OvulationTestStep1"
          component={OvulationTestStep1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OvulationTestStep2"
          component={OvulationTestStep2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OvulationTestStep3"
          component={OvulationTestStep3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OvulationTestStep4"
          component={OvulationTestStep4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UtiDetectionStep1"
          component={UtiDetectionStep1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UtiDetectionStep2"
          component={UtiDetectionStep2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenopauseStep1"
          component={MenopauseStep1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenopauseStep2"
          component={MenopauseStep2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
