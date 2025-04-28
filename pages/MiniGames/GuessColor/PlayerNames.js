import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomPlayerInput from '../../../components/miniGames/ColorGuess/CustomPlayerInput';
import {setPlayerNames} from '../../../src/redux/games/colorGuess/colorGuessSlice';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';

const PlayerNames = () => {
  const navigation = useNavigation();
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
      <Text style={styles.pageTitleHeading}>Enter player</Text>
      <Text style={styles.pageTitleHeading2}>names</Text>

      <ScrollView contentContainerStyle={styles.inputContainer}>
        {Array.from({length: numberOfPlayers}).map((_, index) => (
          <CustomPlayerInput
            key={index}
            placeholder={`Player ${index + 1}`}
            value={playerNames[index] || ''}
            onChangeText={text => handleNameChange(text, index)}
            width={350}
            height={50}
            borderRadius={16}
            backgroundColor="#f2f2f2"
            textColor="#000"
            fontSize={18}
            style={{marginVertical: 8}}
          />
        ))}

        <View style={styles.buttonContainer}>
          <ColorGuessButton
            title="Next"
            width={350}
            height={60}
            backgroundColor="#5df9f6"
            textColor="#333"
            borderRadius={20}
            onPress={() => navigation.navigate('')}
          />
        </View>
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
  buttonContainer: {
    marginTop: 30,
  },
  pageTitleHeading: {
    fontWeight: 'medium',
    color: '#ffff',
    fontSize: 34,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  pageTitleHeading2: {
    color: '#5df9f6',
    fontSize: 64,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
