import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import {useNavigation} from '@react-navigation/native';
import {image} from '../../assets/images';

const data = [
  {
    title: 'Analytical Need',
    description:
      'Suspendisse potenti nullam ac tortor vitae. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna. Ut consequat semper viverra nam.',
  },
  {
    title: 'Ads Terms',
    description:
      'Suspendisse potenti nullam ac tortor vitae. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna. Ut consequat semper viverra nam.',
  },
  {
    title: 'Marketing',
    description:
      'Suspendisse potenti nullam ac tortor vitae. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna. Ut consequat semper viverra nam.',
  },
  {
    title: 'Technical requirements',
    description:
      'Suspendisse potenti nullam ac tortor vitae. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna. Ut consequat semper viverra nam.',
  },
  {
    title: 'Terms & Condition',
    description:
      'Suspendisse potenti nullam ac tortor vitae. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna. Ut consequat semper viverra nam.',
  },
  {
    title: 'Privacy Policy',
    description:
      'Suspendisse potenti nullam ac tortor vitae. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna. Ut consequat semper viverra nam.',
  },
  {
    title: 'Cookie Policy',
    description:
      'Suspendisse potenti nullam ac tortor vitae. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna. Ut consequat semper viverra nam.',
  },
  {
    title: 'Delete My Account',
    description:
      'Suspendisse potenti nullam ac tortor vitae. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna. Ut consequat semper viverra nam.',
  },
];
const Setting = () => {
  const navigation = useNavigation();
  const [isEnabled1, setIsEnabled1] = useState('NO');
  const [isEnabled2, setIsEnabled2] = useState('NO');
  const toggleSwitch = () => {
    if (isEnabled1 == 'NO') {
      setIsEnabled1('YES');
    } else {
      setIsEnabled1('NO');
    }
  };
  const toggleSwitch2 = () => {
    if (isEnabled2 == 'NO') {
      setIsEnabled2('YES');
    } else {
      setIsEnabled2('NO');
    }
  };

  return (
    <>
      <ImageBackground style={{flex: 1}} source={image.loginbg}>
        <ScrollView style={{paddingHorizontal: 10}}>
          <View style={{paddingVertical: 10}}>
            <Text style={{fontSize: 21, fontWeight: '700', color: '#222222'}}>
              Settings
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            <View>
              <Text style={{fontSize: 16, color: '#222222'}}>
                Notifications
              </Text>
              <Text style={{color: '#647589'}}>All the notifications</Text>
            </View>
            <View>
              <SwitchToggle
                switchOn={isEnabled1 == 'YES' ? true : false}
                onPress={toggleSwitch}
                buttonText={isEnabled1}
                buttonStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: isEnabled1 == 'NO' ? 'grey' : '#f76f44',
                }}
                buttonTextStyle={{
                  color: '#fff',
                }}
                backgroundColorOn="#edeff4"
                backgroundColorOff="#edeff4"
                containerStyle={{
                  width: 60,
                  borderRadius: 25,
                  padding: 3,
                  backgroundColor: 'red',
                }}
                circleStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            <View>
              <Text style={{fontSize: 16, color: '#222222'}}>
                Maintain History
              </Text>
              <Text style={{color: '#647589'}}>
                Only maintain for 1 week if not on
              </Text>
            </View>
            <View>
              <SwitchToggle
                switchOn={isEnabled2 == 'YES' ? true : false}
                onPress={toggleSwitch2}
                buttonText={isEnabled2}
                buttonStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: isEnabled2 == 'NO' ? 'grey' : '#f76f44',
                }}
                buttonTextStyle={{
                  color: '#fff',
                }}
                backgroundColorOn="#edeff4"
                backgroundColorOff="#edeff4"
                containerStyle={{
                  width: 60,
                  borderRadius: 25,
                  padding: 3,
                  backgroundColor: 'red',
                }}
                circleStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              />
            </View>
          </View>
          <View style={{marginVertical: 15}}>
            {data?.map(item => {
              return (
                <View
                  key={Math.floor(Math.random() * 10000)}
                  style={{marginBottom: 15}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '700',
                        color: '#222222',
                      }}>
                      {item.title}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('SettingDetails', {details: item})
                      }>
                      <Text style={{color: '#F76F44', fontSize: 12}}>
                        Read More
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{fontSize: 14, color: '#222222', marginVertical: 5}}>
                    {item.description}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};
export default Setting;
