import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from '../../routes';
import HomeStack from './HomeStack';
import {useNavigation} from '@react-navigation/native';
import Alert from '../Alerts';
import {image} from '../../assets/images';

const Drawer = createDrawerNavigator();
const DrawerContent = props => {
  const navigation = useNavigation();
  const Logout = async data => {
    if (data.route == 'Logout') {
      navigation.navigate('Logout');
    } else {
      navigation.navigate(data.route, {item: data});
    }
  };
  return (
    <>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
          <View
            style={{
              marginRight: 15,
            }}>
            <Image
              style={{width: 50, height: 50, borderRadius: 100}}
              resizeMode="contain"
              source={image.Avatar}
            />
          </View>
          <Text style={{fontSize: 16, fontWeight: 'medium', color: '#222222'}}>
            Hello, Radhika
          </Text>
          <Text style={{fontSize: 20}}>{' >'}</Text>
        </View>
        {Routes.map(it => {
          return (
            <TouchableOpacity
              onPress={() => {
                Logout(it);
              }}
              style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                paddingVertical: 15,
                alignItems: 'center',
                borderTopWidth: 1,
                borderColor: '#edeff499',
                backgroundColor: 'white',
              }}>
              <Image source={it.icon} style={{height: 35, width: 35}} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 15,
                  color: '#222222',
                  fontWeight: 'bold',
                }}>
                {it.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default function MainScreen() {
  return (
    <Drawer.Navigator
      initialRouteName={'HomeStack'}
      //   backBehavior={'history'}
      drawerContent={props => <DrawerContent {...props} />}
      //   defaultStatus={'closed'}
      screenOptions={{
        header: () => false,
      }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      {/* <Drawer.Screen name="Alert" component={Alert} /> */}
    </Drawer.Navigator>
  );
}
