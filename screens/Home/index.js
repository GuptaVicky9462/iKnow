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
import Assesment from '../Assesment';

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
import UtiDetectionStep3 from '../UtiDetectionStep2/UtiDetectionStep3';
// import UtiDetectionStep4 from '../UtiDetectionStep2/UtiDetectionStep4';
// import UtiDetectionResult from '../UtiDetectionStep2/UtiDetectionResult';
import MenopauseStep3 from '../MenopauseStep2/MenopauseStep3';
import MenopauseStep4 from '../MenopauseStep2/MenopauseStep4';
import MenopauseResult from '../MenopauseStep2/MenopauseResult';
import UtiDetectionStep4 from '../UtiDetectionStep2/UtiDetectionStep4';
import UtiDetectionStep5 from '../UtiDetectionStep2/UtiDetectionStep5';
import UtiResult from '../UtiDetectionStep2/Utiresult';
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
          name="Assesment"
          component={Assesment}
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
          name="MenopauseStep3"
          component={MenopauseStep3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenopauseStep4"
          component={MenopauseStep4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UtiDetectionStep3"
          component={UtiDetectionStep3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UtiDetectionStep4"
          component={UtiDetectionStep4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UtiDetectionStep5"
          component={UtiDetectionStep5}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UtiResult"
          component={UtiResult}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MenopauseResult"
          component={MenopauseResult}
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

        {/* <Stack.Screen
          name="UtiDetectionStep4"
          component={UtiDetectionStep4}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="UtiDetectionResult"
          component={UtiDetectionResult}
          options={{headerShown: false}}
        /> */}

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
