import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import CheckBox from 'react-native-check-box'

const data = [
  {
    title: 'Introduction',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi etiam dignissim diam. Habitant morbi tristique senectus et netus. Vitae sapien pellentesque habitant morbi tristique senectus. Vitae suscipit tellus mauris a.',
  },
  {
    title: 'Pharetra vel turpis nunc eget.',
    description:
      'Nibh venenatis cras sed felis eget velit aliquet sagittis id. Non nisi est sit amet facilisis magna etiam tempor orci. Pretium quam vulputate dignissim suspendisse in est. Elit at imperdiet dui accumsan sit amet. Sagittis id consectetur purus ut faucibus pulvinar. Tortor dignissim convallis aenean et tortor at risus.',
  },
  {
    title: 'Egestas sed sed risus pretium quam.',
    description:
      'Diam sollicitudin tempor id eu nisl nunc mi. Sit amet consectetur adipiscing elit pellentesque. Urna id volutpat lacus laoreet. Vel pretium lectus quam id. Mauris in aliquam sem fringilla. Accumsan tortor posuere ac ut consequat semper. Et netus et malesuada fames ac.',
  },
  {
    title: 'Pharetra vel turpis nunc eget.',
    description:
      'Nibh venenatis cras sed felis eget velit aliquet sagittis id. Non nisi est sit amet facilisis magna etiam tempor orci. Pretium quam vulputate dignissim suspendisse in est. Elit at imperdiet dui accumsan sit amet. Sagittis id consectetur purus ut faucibus pulvinar. Tortor dignissim convallis aenean et tortor at risus.',
  },
  {
    title: 'Pharetra vel turpis nunc eget.',
    description:
      'Nibh venenatis cras sed felis eget velit aliquet sagittis id. Non nisi est sit amet facilisis magna etiam tempor orci. Pretium quam vulputate dignissim suspendisse in est. Elit at imperdiet dui accumsan sit amet. Sagittis id consectetur purus ut faucibus pulvinar. Tortor dignissim convallis aenean et tortor at risus.',
  },
];

const Term_Condition = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const saveData = async () => {
    console.log('hihih');
    await AsyncStorage.setItem('key', 'mainScreen');
  };
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/login-bg.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          paddingVertical: 20,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 25,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Term & Condition
          </Text>
        </View>
        <View
          style={{
            margin: 20,
            backgroundColor: 'rgba(255,255,255',
            borderRadius: 10,
            padding: 10,
          }}>
          <ScrollView style={{height: '80%'}}>
            {data.map(item => {
              return (
                <View style={{paddingVertical: 5}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {item.title}
                  </Text>
                  <Text style={{fontSize: 16, paddingVertical: 5}}>
                    {item.description}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {/* <CheckBox
            // style={{flex: 1, padding: 10}}
            onClick={() => setIsChecked(!isChecked)}
            isChecked={isChecked}
            // leftText={'CheckBox'}
          /> */}
          <Text>Box</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              paddingLeft: 5,
            }}>
            I accept the Terms & Condition.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => saveData()}
          style={{
            width: '50%',
            alignSelf: 'center',
            paddingVertical: 12,
            backgroundColor: '#EC187C',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
            borderRadius: 50,
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>SUBMIT</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
export default Term_Condition;
