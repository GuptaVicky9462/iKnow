import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../Common/CustomInput';
import Feather from 'react-native-vector-icons/Feather';
import ModalSelector from 'react-native-modal-selector';

const data = [
  {label: 'Your Name', placeholder: 'Name'},
  {label: 'Your Email', placeholder: 'Email'},
  {label: 'Your Mobile', placeholder: 'Mobile'},
  {label: 'Your Age', placeholder: 'Age'},
];

let index = 0;
const Gender = [
  {key: index++, label: 'Male'},
  {key: index++, label: 'Female'},
];
const State = [
  {key: index++, label: 'Maharashtra'},
  {key: index++, label: 'Karnataka'},
  {key: index++, label: 'Haryana'},
  {key: index++, label: 'Assam'},
];
const City = [
  {key: index++, label: 'Mumbai'},
  {key: index++, label: 'Chennai'},
  {key: index++, label: 'Surat'},
  {key: index++, label: 'Madurai'},
];
const CompleteProfile = () => {
  const [gender, setGender] = useState('Male');
  const [state, setState] = useState('Maharashtra');
  const [city, setCity] = useState('Mumbai');
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/login-bg.png')}
      resizeMode="cover"
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 20,
      }}>
      <ScrollView style={{flex: 1}}>
        <View style={{alignSelf: 'center', paddingVertical: 20}}>
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            paddingBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 25,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
            }}>
            Please enter the details to compelet your profile.
          </Text>
        </View>
        {data?.map(item => {
          return (
            <>
              <CustomInput label={item.label} placeholder={item.placeholder} />
            </>
          );
        })}
        <ModalSelector
          initValue="Gender"
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          style={{alignSelf: 'center', width: '85%'}}
          data={Gender}
          onChange={option => {
            setGender(option.label);
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              fontSize: 16,
              color: 'black',
              marginVertical: 10,
              marginTop: 10,
            }}
            editable={false}
            mode="outlined"
            outlineColor="#ced4da"
            activeOutlineColor="#ced4da"
            value={gender}
            // right={
            //   <TextInput.Icon
            //     name={() => (
            //       <Feather size={16} name="chevron-down" color="black" />
            //     )}
            //   />
            // }
          />
          <View
            style={{
              backgroundColor: '#ec187c',
              width: 'auto',
              maxWidth: '100%',
              position: 'absolute',
              padding: 6,
              left: 25,
            }}>
            <Text style={{color: 'white'}}> Select Gender</Text>
          </View>
        </ModalSelector>
        <ModalSelector
          initValue="Select State"
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          style={{alignSelf: 'center', width: '85%'}}
          data={State}
          onChange={option => {
            setState(option.label);
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              fontSize: 16,
              color: 'black',
              marginVertical: 10,
              marginTop: 10,
            }}
            editable={false}
            mode="outlined"
            outlineColor="#ced4da"
            activeOutlineColor="#ced4da"
            value={state}
            // right={
            //   <TextInput.Icon
            //     name={() => (
            //       <Feather size={16} name="chevron-down" color="black" />
            //     )}
            //   />
            // }
          />
          <View
            style={{
              backgroundColor: '#ec187c',
              width: 'auto',
              maxWidth: '100%',
              position: 'absolute',
              padding: 6,
              left: 25,
            }}>
            <Text style={{color: 'white'}}>Select State</Text>
          </View>
        </ModalSelector>
        <ModalSelector
          initValue="Select City"
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          style={{alignSelf: 'center', width: '85%'}}
          data={City}
          onChange={option => {
            setCity(option.label);
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              fontSize: 16,
              color: 'black',
              marginVertical: 10,
              marginTop: 10,
            }}
            editable={false}
            mode="outlined"
            outlineColor="#ced4da"
            activeOutlineColor="#ced4da"
            value={city}
            // right={
            //   <TextInput.Icon
            //     name={() => (
            //       <Feather size={16} name="chevron-down" color="black" />
            //     )}
            //   />
            // }
          />
          <View
            style={{
              backgroundColor: '#ec187c',
              width: 'auto',
              maxWidth: '100%',
              position: 'absolute',
              padding: 6,
              left: 25,
            }}>
            <Text style={{color: 'white'}}>Select City</Text>
          </View>
        </ModalSelector>

        <TouchableOpacity
          onPress={() => navigation.navigate('Term_Condition')}
          style={{
            width: '60%',
            alignSelf: 'center',
            paddingVertical: 12,
            backgroundColor: '#EC187C',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30,
            borderRadius: 50,
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};
export default CompleteProfile;
