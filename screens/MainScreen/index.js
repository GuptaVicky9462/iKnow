import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from '../../routes';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();
const DrawerContent = props => {
  return (
    <>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
          <View
            style={{
              height: 50,
              width: 50,
              borderWidth: 1,
              marginRight: 10,
            }}></View>
          <Text style={{fontSize: 16, fontWeight: 'medium', color: '#222222'}}>
            Hello, Radhika
          </Text>
          <Text style={{fontSize: 20}}> {'>'}</Text>
        </View>
        {Routes.map(it => {
          return (
            <View
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
            </View>
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
    </Drawer.Navigator>
  );
}
