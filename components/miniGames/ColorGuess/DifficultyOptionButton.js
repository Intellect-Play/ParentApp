import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const DifficultyOptionButton = ({
  level = 'Easy',
  seconds = 15,
  onPress = () => {},
  backgroundColor = '#f2f2f2',
  textColor = '#000',
  secondsColor = '#000', // ✅ yeni eklendi
  wordCount = false,
  width = 330,
  height = 60,
  borderRadius = 16,
  fontSize = 18,
  selected = false,
  selectedColor = '#00e6e6',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: selected ? selectedColor : backgroundColor,
          width,
          height,
          borderRadius,
        },
      ]}>
      <Text style={[styles.levelText, {color: textColor, fontSize}]}>
        {level}
      </Text>
      <Text
        style={[
          styles.secondsText,
          {color: secondsColor, fontSize: fontSize - 2},
        ]}>
        {seconds} seconds {wordCount && `- ${wordCount} words`}
      </Text>
    </TouchableOpacity>
  );
};

export default DifficultyOptionButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  levelText: {
    fontWeight: 'bold',
  },
  secondsText: {
    fontWeight: '600',
  },
});
