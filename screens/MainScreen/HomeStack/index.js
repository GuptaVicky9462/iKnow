import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Home from '../../../screens/Home';
import Setting from '../../Setting';
import Profile from '../../Profile';
import Header from './Header';
import Calendar from '../../Calandar';
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
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'CALANDAR',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'SETTING',
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeStack;
