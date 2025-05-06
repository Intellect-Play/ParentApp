import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

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
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    onPress();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={loading}
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor,
          borderRadius,
        },
      ]}>
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.text, {color: textColor, fontSize}]}>{title}</Text>
      )}
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
