import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomPlayerInput from '../../../components/miniGames/ColorGuess/CustomPlayerInput';
import {setPlayerNames} from '../../../src/redux/games/colorGuess/colorGuessSlice';

const PlayerNames = () => {
  const dispatch = useDispatch();
  const numberOfPlayers = useSelector(
    state => state.colorGuess.numberOfPlayers,
  );
  const playerNames = useSelector(state => state.colorGuess.playerNames);

  const handleNameChange = (text, index) => {
    const newNames = [...playerNames];
    newNames[index] = text;
    dispatch(setPlayerNames(newNames));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ENTER PLAYER NAMES</Text>

      <ScrollView contentContainerStyle={styles.inputContainer}>
        {Array.from({length: numberOfPlayers}).map((_, index) => (
          <CustomPlayerInput
            key={index}
            placeholder={`Player ${index + 1}`}
            value={playerNames[index] || ''}
            onChangeText={text => handleNameChange(text, index)}
            width={320}
            height={50}
            borderRadius={16}
            backgroundColor="#f2f2f2"
            textColor="#000"
            fontSize={18}
            style={{marginVertical: 8}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PlayerNames;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7985e9',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    alignItems: 'center',
    paddingBottom: 60,
  },
});
