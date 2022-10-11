import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Home from '../../../screens/Home';
const Tab = createBottomTabNavigator();

const Setting = () => {
  return (
    <>
      <Text>jiu</Text>
    </>
  );
};
const Profile = () => {
  return (
    <>
      <Text>jiu</Text>
    </>
  );
};
const HomeStack = props => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarStyle: {
        //   borderTopLeftRadius: 20,
        //   borderTopRightRadius: 20,
        //   backgroundColor: '#212121',
        //   height: 60,
        //   borderTopWidth: 0,
        //   padding: 0,
        //   position: 'absolute',
        // },
        headerShown: false,
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
