import {StyleSheet, Text} from 'react-native';
import React from 'react';

const LuckiestText = ({children, style, ...props}) => {
  return (
    <Text style={[styles.font, style]} {...props}>
      {children}
    </Text>
  );
};

export default LuckiestText;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'LuckiestGuy-Regular',
  },
});
