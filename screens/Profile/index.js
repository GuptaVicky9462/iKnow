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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {image} from '../../assets/images';

const data = [
  {label: 'Name', placeholder: 'Name'},
  {label: 'Email', placeholder: 'Email'},
  {label: 'Mobile', placeholder: 'Mobile'},
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
const Profile = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState('Male');
  const [state, setState] = useState('Maharashtra');
  const [city, setCity] = useState('Mumbai');
  const [dob, setDob] = useState('mm/dd/yyyy');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDob(moment(date).format('MM/DD/YYYY'));
    hideDatePicker();
  };
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={image.loginbg}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          paddingVertical: 20,
        }}>
        <View
          style={{
            alignSelf: 'center',
            // width: 110,
            // height: 110,
            // borderWidth: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Image
            style={{width: 110, height: 110, borderRadius: 100}}
            resizeMode="contain"
            source={image.Avatar}
          />
          <View
            style={{
              width: 30,
              height: 30,
              elevation: 5,
              backgroundColor: 'white',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 2,
              right: -15,
            }}>
            <Feather size={16} name="edit" color="#F76F44" />
          </View>
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 25,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Personal Details
          </Text>
        </View>
        {data.map(item => {
          return (
            <>
              <CustomInput label={item.label} placeholder={item.placeholder} />
            </>
          );
        })}
        <View
          style={{
            width: '85%',
            alignSelf: 'center',
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
            value={dob}
            right={
              <TextInput.Icon
                name={() => <Feather size={16} name="calendar" color="black" />}
                onPress={() => {
                  console.log('sdf');
                  showDatePicker();
                }}
              />
            }
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View
            style={{
              backgroundColor: '#ec187c',
              width: 'auto',
              maxWidth: '100%',
              position: 'absolute',
              padding: 6,
              left: 20,
            }}>
            <Text style={{color: 'white'}}>Date Of Birth</Text>
          </View>
        </View>
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
            right={
              <TextInput.Icon
                name={() => (
                  <Feather size={16} name="chevron-down" color="black" />
                )}
              />
            }
          />
          <View
            style={{
              backgroundColor: '#ec187c',
              width: 'auto',
              maxWidth: '100%',
              position: 'absolute',
              padding: 6,
              left: 20,
            }}>
            <Text style={{color: 'white'}}>Gender</Text>
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
            right={
              <TextInput.Icon
                name={() => (
                  <Feather size={16} name="chevron-down" color="black" />
                )}
              />
            }
          />
          <View
            style={{
              backgroundColor: '#ec187c',
              width: 'auto',
              maxWidth: '100%',
              position: 'absolute',
              padding: 6,
              left: 20,
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
            right={
              <TextInput.Icon
                name={() => (
                  <Feather size={16} name="chevron-down" color="black" />
                )}
              />
            }
          />
          <View
            style={{
              backgroundColor: '#ec187c',
              width: 'auto',
              maxWidth: '100%',
              position: 'absolute',
              padding: 6,
              left: 20,
            }}>
            <Text style={{color: 'white'}}>Select City</Text>
          </View>
        </ModalSelector>
        <CustomInput label="Address" placeholder="Address" />
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
          <Text style={{fontSize: 18, color: 'white'}}>SAVE DETAILS</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};
export default Profile;
