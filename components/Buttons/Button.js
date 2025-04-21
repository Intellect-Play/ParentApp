import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const Button = ({
  text = 'Button',
  onPress = () => {},
  containerStyle = {},
  textStyle = {},
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.buttonContainer,
        containerStyle,
        {opacity: pressed ? 0.7 : 1},
        disabled && styles.disabledButton,
      ]}
      disabled={disabled}
      android_ripple={{color: '#f0f0f0'}}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2052ed',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Android gölge
    shadowColor: '#000', // iOS gölge
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    fontFamily: 'Poppins',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Poppins',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
});

export default Button;
