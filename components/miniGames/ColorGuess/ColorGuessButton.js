import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ColorGuessButton = ({
  title = 'Button',
  onPress = () => {},
  width = 200,
  height = 50,
  backgroundColor = '#fff',
  textColor = '#000',
  borderRadius = 12,
  fontSize = 16,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor,
          borderRadius,
        },
      ]}>
      <Text style={[styles.text, {color: textColor, fontSize}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default ColorGuessButton;
