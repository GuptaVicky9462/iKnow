import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from '../../routes';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();
const DrawerContent = props => {
  return (
    <>
      {/* <View style={styles.imgbox}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://codersera.com/blog/wp-content/uploads/2020/11/React-Learning-Path-1.png',
            }}
          />
          <Text style={styles.numbertxt}>9462656067</Text>
        </View> */}
      <ScrollView
      //    contentContainerStyle={styles.scollcontent}
      >
        {Routes.map(it => {
          return (
            <View
            //   style={[
            //     styles.routesbox,
            //     {borderBottomWidth: Routes[Routes.length - 1] == it ? 2 : null},
            //   ]}
            >
              {/* <Text style={styles.icon}>{it.icon}</Text> */}
              <Text
              //    style={styles.labeltxt}
              >
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
