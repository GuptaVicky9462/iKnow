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
import {AuthContext} from '../../App';
import CheckBox from 'react-native-check-box';
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
  const {setToken} = React.useContext(AuthContext);

  const saveData = async () => {
    let token = await AsyncStorage.setItem('routes', 'true');
    setToken('true');
  };
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/login-bg.png')}
        resizeMode="cover"
        style={{
          flex: 1,
          backgroundColor: '#f8f6f6',
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
              color: 'black',
            }}>
            Term & Condition
          </Text>
        </View>
        {/* <View
          style={{
            margin: 20,
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: 10,
            padding: 10,
          }}> */}
        <ScrollView
          // style={{height: '80%'}}
          contentContainerStyle={{
            margin: 10,
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderRadius: 10,
            padding: 8,
          }}>
          {data.map(item => {
            return (
              <View style={{paddingVertical: 5}}>
                <Text style={{fontSize: 16, color: '#222222'}}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 16, paddingVertical: 5}}>
                  {item.description}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        {/* </View> */}
        <View style={{backgroundColor: '#f8f6f6', paddingTop: 20}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <CheckBox
              onClick={() => {
                setIsChecked(!isChecked);
              }}
              checkedCheckBoxColor="#0075ff"
              isChecked={isChecked}
            />
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                paddingLeft: 5,
              }}>
              I accept the Terms & Condition.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => saveData()}
            style={{
              minWidth: '70%',
              alignSelf: 'center',
              paddingVertical: 5,
              backgroundColor: '#EC187C',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
              borderRadius: 50,
            }}>
            <Text style={{fontSize: 18, color: 'white'}}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};
export default Term_Condition;
