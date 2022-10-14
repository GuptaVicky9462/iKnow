import React from 'react';
import {Image, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-paper';

const TrackCycleFormBox = ({
  isVisible = false,
  value = '',
  setValue = null,
  placeholder = '',
  title = 'Title',
  icon = null,
  handleClick = null,
}) => {
  const [text, setText] = React.useState('');
  console.log(isVisible);
  return (
    <>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 10,
          marginTop: 7,
          borderWidth: 1,
          borderColor: '#EC187C',
          marginBottom: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 10,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{height: 55, width: 55}} source={icon} />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              width: '85%',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#EC187C'}}>
              {title}
            </Text>
          </View>
        </View>
        <TextInput
          placeholder={placeholder}
          value={text || value}
          onChangeText={text => {
            setText(text);
            typeof setValue === 'function' && setValue(text);
          }}
          mode="outlined"
          outlineColor="#ced4da"
          style={{
            width: '100%',
            backgroundColor: 'white',
            fontSize: 16,
            color: 'black',
            marginVertical: 10,
          }}
          editable={isVisible ? false : true}
          activeOutlineColor="#ced4da"
          right={
            isVisible ? (
              <TextInput.Icon
                name={() => <Feather size={16} name="calendar" color="black" />}
                onPress={() => {
                  handleClick && handleClick();
                }}
              />
            ) : null
          }
        />
      </View>
    </>
  );
};
export default TrackCycleFormBox;
