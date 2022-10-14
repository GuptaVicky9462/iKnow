import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const TrackCycleFormBox = ({
  value = '',
  setValue = null,
  placeholder = '',
  title = 'Title',
  icon = null,
}) => {
  const [text, setText] = React.useState('');
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
            <Image style={{height: 45, width: 45}} source={icon} />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              width: '85%',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#EC187C'}}>
              {title}
            </Text>
          </View>
        </View>
        <TextInput
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            marginTop: 16,
            borderWidth: 1,
            borderColor: '#ced4da',
            // backgroundColor: '#ffffff',
            borderRadius: 5,
            fontSize: 16,
          }}
          outlineColor="grey"
          activeOutlineColor="grey"
          placeholder={placeholder}
          value={text || value}
          onChangeText={text => {
            setText(text);
            typeof setValue === 'function' && setValue(text);
          }}
        />
      </View>
    </>
  );
};
export default TrackCycleFormBox;
