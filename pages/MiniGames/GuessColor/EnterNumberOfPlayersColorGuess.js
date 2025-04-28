import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch, useSelector} from 'react-redux';
import {setNumberOfPlayers} from '../../../src/redux/games/colorGuess/colorGuessSlice';

const EnterNumberOfPlayersColorGuess = () => {
  const dispatch = useDispatch();
  const numberOfPlayers = useSelector(
    state => state.colorGuess.numberOfPlayers,
  );

  return (
    <View style={styles.mainScreen}>
      <Text style={styles.title}>Select Number of Players</Text>

      <RNPickerSelect
        onValueChange={value => {
          if (value) dispatch(setNumberOfPlayers(value));
        }}
        placeholder={{label: 'Select players...', value: null}}
        value={numberOfPlayers}
        items={[
          {label: '1', value: 1},
          {label: '2', value: 2},
          {label: '3', value: 3},
          {label: '4', value: 4},
          {label: '5', value: 5},
        ]}
        style={pickerSelectStyles}
      />

      <Text style={styles.text}>Selected: {numberOfPlayers}</Text>
    </View>
  );
};

export default EnterNumberOfPlayersColorGuess;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#7985e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  text: {
    color: 'white',
    marginTop: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#b2fefa',
    color: '#000',
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#b2fefa',
    color: '#000',
    marginBottom: 10,
  },
});
