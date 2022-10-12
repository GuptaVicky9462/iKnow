import React, {useEffect, useState} from 'react';
import MainScreen from './screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import Login from './screens/Login';
import Otp from './screens/Otp';
import CompleteProfile from './screens/CompleteProfile';
import Term_Condition from './screens/Term_Condition';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();

function App() {
  const initialState = {
    authToken: null,
  };

  const reducer = (prevState, action) => {
    console.log('axojihukyjfh', action.data);
    switch (action.type) {
      case 'SET_TOKEN':
        return {
          ...prevState,
          authToken: action.data,
        };
      default:
        return {
          ...prevState,
        };
    }
  };

  const authContext = React.useMemo(
    () => ({
      setToken: async data => {
        console.log('authContzt', data);
        dispatch({type: 'SET_TOKEN', data: data});
      },
    }),
    [],
  );
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const initializeApp = async () => {
    let userProfile = await AsyncStorage.getItem('routes');
    console.log('userProfile', userProfile);
    console.log('state.authToken', state.authToken);
    if (userProfile) {
      dispatch({type: 'SET_TOKEN', data: userProfile});
    }
  };
  useEffect(() => {
    LogBox.ignoreAllLogs();
    initializeApp();
  }, []);
  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator
          initialRouteName={state.authToken ? 'MainScreen' : 'Login'}>
          {state.authToken ? (
            <Stack.Screen
              name="MainScreen"
              component={props => <MainScreen {...props} />}
              options={{headerShown: false}}
            />
          ) : (
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
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

export {App as default, AuthContext};
