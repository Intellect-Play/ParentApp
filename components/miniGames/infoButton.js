import React from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';

const InfoButton = ({message = 'Info about this game'}) => {
  return (
    <View style={styles.infoIcon}>
      <TouchableOpacity onPress={() => Alert.alert('About the Game', message)}>
        <FontAwesomeIcon icon={faCircleInfo} size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  infoIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
  },
});

export default InfoButton;
