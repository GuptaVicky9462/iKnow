import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

const SettingDetails = props => {
  const title = props?.route?.params?.details?.title;
  return (
    <>
      <ScrollView>
        <ImageBackground
          style={{padding: 15}}
          source={require('../../assets/images/login-bg.png')}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 20, color: '#222222', fontWeight: '700'}}>
              {title}
            </Text>
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Introduction</Text>
            <Text style={{fontSize: 16, paddingVertical: 5}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
              ullamcorper eget nulla facilisi etiam dignissim diam. Habitant
              morbi tristique senectus et netus. Vitae sapien pellentesque
              habitant morbi tristique senectus. Vitae suscipit tellus mauris a.
            </Text>
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Pharetra vel turpis nunc eget.
            </Text>
            <Text style={{fontSize: 16, paddingVertical: 5}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
              ullamcorper eget nulla facilisi etiam dignissim diam. Habitant
              morbi tristique senectus et netus. Vitae sapien pellentesque
              habitant morbi tristique senectus. Vitae suscipit tellus mauris a.
            </Text>
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Egestas sed sed risus pretium quam.
            </Text>
            <Text style={{fontSize: 16, paddingVertical: 5}}>
              Diam sollicitudin tempor id eu nisl nunc mi. Sit amet consectetur
              adipiscing elit pellentesque. Urna id volutpat lacus laoreet. Vel
              pretium lectus quam id. Mauris in aliquam sem fringilla. Accumsan
              tortor posuere ac ut consequat semper. Et netus et malesuada fames
              ac. Diam sollicitudin tempor id eu nisl nunc mi. Sit amet
              consectetur adipiscing elit pellentesque. Urna id volutpat lacus
              laoreet. Vel pretium lectus quam id. Mauris in aliquam sem
              fringilla. Accumsan tortor posuere ac ut consequat semper. Et
              netus et malesuada fames ac. Diam sollicitudin tempor id eu nisl
              nunc mi. Sit amet consectetur adipiscing elit pellentesque. Urna
              id volutpat lacus laoreet. Vel pretium lectus quam id. Mauris in
              aliquam sem fringilla. Accumsan tortor posuere ac ut consequat
              semper. Et netus et malesuada fames ac.
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};
export default SettingDetails;
