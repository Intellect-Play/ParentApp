import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const CustomPlayerInput = ({
  placeholder = 'Enter text...',
  value,
  onChangeText = () => {},
  width = '90%',
  height = 50,
  borderRadius = 12,
  backgroundColor = '#f2f2f2',
  textColor = '#000',
  placeholderTextColor = '#aaa',
  fontSize = 16,
  style,
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        {width, height, borderRadius, backgroundColor},
        style,
      ]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={{
          flex: 1,
          paddingHorizontal: 16,
          color: textColor,
          fontSize,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
});

export default CustomPlayerInput;
