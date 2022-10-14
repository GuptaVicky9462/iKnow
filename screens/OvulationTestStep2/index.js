import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {image} from '../../assets/images';
import TrackCycleFormBox from '../Common/TrackCycleFormBox';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const OvulationTestStep2 = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const handleClick = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(moment(date).format('MM/DD/YYYY'));
    hideDatePicker();
  };
  return (
    <>
      <ImageBackground style={{flex: 1}} source={image.loginbg}>
        <ScrollView style={{paddingVertical: 10, paddingHorizontal: 15}}>
          <TrackCycleFormBox
            placeholder="05"
            title="Select the length of your menstrual cycle."
            icon={image.menstrualcycleicon}
          />
          <TrackCycleFormBox
            placeholder="05"
            title="Select the length you of your period."
            icon={image.menstrualcyclelengthicon}
          />
          <TrackCycleFormBox
            placeholder="mm/dd/yyyy"
            title="Select start date of your last period."
            icon={image.periodstartdate}
            isVisible={isVisible}
            handleClick={handleClick}
            value={date}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View style={{alignItems: 'center', paddingVertical: 15}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OvulationTestStep3')}
              style={{
                minWidth: '60%',
                backgroundColor: '#EC187C',
                borderRadius: 50,
                paddingVertical: 10,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#ffffff'}}>NEXT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                minWidth: '60%',
                backgroundColor: '#EC187C',
                borderRadius: 50,
                paddingVertical: 10,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#ffffff'}}>BACK</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};
export default OvulationTestStep2;
