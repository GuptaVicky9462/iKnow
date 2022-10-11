import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const CustomInput = ({
  value = '',
  setValue = null,
  placeholder = '',
  label = 'label',
}) => {
  const [text, setText] = React.useState('');
  return (
    <View style={{alignItems: 'center'}}>
      <TextInput
        value={text || value}
        mode="outlined"
        outlineColor="grey"
        placeholder={placeholder}
        style={{
          width: '85%',
          backgroundColor: 'white',
          fontSize: 16,
          color: 'black',
          marginVertical: 10,
          marginTop: 10,
        }}
        multiline={label == 'Address' ? true : false}
        activeOutlineColor="grey"
        onChangeText={text => {
          setText(text);
          typeof setValue === 'function' && setValue(text);
        }}
      />
      {label ? (
        <View
          style={{
            backgroundColor: '#ec187c',
            width: 'auto',
            maxWidth: '100%',
            position: 'absolute',
            padding: 6,
            left: 50,
          }}>
          <Text style={{color: 'white'}}>{label}</Text>
        </View>
      ) : null}
    </View>
  );
};
export default CustomInput;
