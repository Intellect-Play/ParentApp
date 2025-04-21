import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
      style={({pressed}) => [containerStyle, {opacity: pressed ? 0.7 : 1}]}
      disabled={disabled}
      android_ripple={{color: '#f0f0f0'}}>
      <LinearGradient
        colors={disabled ? ['#cccccc', '#cccccc'] : ['#4e90ff', '#2052ed']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.buttonContainer]}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
