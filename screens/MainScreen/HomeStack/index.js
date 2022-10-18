import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Home from '../../../screens/Home';
import Setting from '../../Setting';
import Profile from '../../Profile';
import Header from './Header';
import Calendar from '../../Calendar';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const HomeStack = props => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShow: true,
        header: p => <Header />,
        tabBarLabel: () => {
          return null;
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarActiveTintColor: '#F76F44',
          tabBarIcon: ({focused}) => (
            <Feather
              name="home"
              size={20}
              color={focused ? '#F76F44' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'CALENDAR',
          tabBarActiveTintColor: '#F76F44',

          tabBarIcon: ({focused}) => (
            <EvilIcons
              name="calendar"
              color={focused ? '#F76F44' : 'black'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarActiveTintColor: '#F76F44',

          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={focused ? '#F76F44' : 'black'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'SETTING',
          tabBarActiveTintColor: '#F76F44',

          tabBarIcon: ({focused}) => (
            <AntDesign
              name="setting"
              color={focused ? '#F76F44' : 'black'}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeStack;
