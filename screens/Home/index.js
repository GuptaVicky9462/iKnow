import {Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingDetails from '../../screens/Common/SettingDetails';
import Alerts from '../Alerts';
import MainHome from './MainHome';
import BlogDetails from '../Common/BlogDetails';
import AboutUs from '../AboutUs';
import Assesment from '../Assesment';
import TrackCycleStep1 from '../TrackCycleStep1';
import TrackCycleStep2 from '../TrackCycleStep2';
import TrackCycleStep3 from '../TrackCycleStep3';
import TrackCycleResult from '../TrackCycleResult';
import TrackCycleDashbord from '../TrackCycleDashbord';
import OvulationTestStep1 from '../OvulationTestStep1';
import OvulationTestStep2 from '../OvulationTestStep2';
import OvulationTestStep3 from '../OvulationTestStep3';
import OvulationTestStep4 from '../OvulationTestStep4';
import OvulationTestStep5 from '../OvulationTestStep5';
import OvulationDashbord from '../OvulationDashbord';
import OvulationTestResult from '../OvulationTestResult';
import UtiDetectionStep1 from '../UtiDetectionStep1';
import UtiDetectionStep2 from '../UtiDetectionStep2';
import UtiDashbord from '../UtiDashbord';
import MenopauseStep1 from '../MenopauseStep1';
import MenopauseStep2 from '../MenopauseStep2';
import MenopauseDashbord from '../MenopauseDashbord';
import UtiDetectionStep3 from '../UtiDetectionStep2/UtiDetectionStep3';
import MenopauseStep3 from '../MenopauseStep2/MenopauseStep3';
import MenopauseStep4 from '../MenopauseStep2/MenopauseStep4';
import MenopauseResult from '../MenopauseStep2/MenopauseResult';
import UtiDetectionStep4 from '../UtiDetectionStep2/UtiDetectionStep4';
import UtiDetectionStep5 from '../UtiDetectionStep2/UtiDetectionStep5';
import UtiResult from '../UtiDetectionStep2/UtiResult';
import Logout from '../Logout';
import OvulationConsolidatedResult from '../OvulationTestStep5/OvulationConsolidatedResult';
import OvulationQuestion2 from '../OvulationQuestion2';
import OvulationQuestion3 from '../OvulationQuestion3/OvulationQuestion3';
import Calendar from '../Calendar';
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
          name="Calendar"
          component={Calendar}
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
          name="BlogDetails"
          component={BlogDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OvulationConsolidatedResult"
          component={OvulationConsolidatedResult}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OvulationQuestion2"
          component={OvulationQuestion2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OvulationQuestion3"
          component={OvulationQuestion3}
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
          name="TrackCycleDashbord"
          component={TrackCycleDashbord}
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
          name="OvulationTestStep5"
          component={OvulationTestStep5}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OvulationTestResult"
          component={OvulationTestResult}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OvulationDashbord"
          component={OvulationDashbord}
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
          name="UtiDashbord"
          component={UtiDashbord}
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
        <Stack.Screen
          name="MenopauseDashbord"
          component={MenopauseDashbord}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
