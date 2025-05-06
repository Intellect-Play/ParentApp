import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomPlayerInput from '../../../components/miniGames/ColorGuess/CustomPlayerInput';
import {useNavigation} from '@react-navigation/native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {setPlayerNames} from '../../../src/redux/games/charadeGuess/charadeGuessSlice';

const PlayerCharadeGuessNames = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const numberOfPlayers = useSelector(
    state => state.charadeGuess.numberOfPlayers,
  );
  const playerNames = useSelector(state => state.charadeGuess.playerNames);
  const [error, setError] = useState('');

  const handleNameChange = (text, index) => {
    const newNames = [...playerNames];
    newNames[index] = text;
    dispatch(setPlayerNames(newNames));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
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
              backgroundColor="#fdd05b"
              textColor="#333"
              borderRadius={20}
              onPress={() => {
                const hasEmpty = Array.from({length: numberOfPlayers}).some(
                  (_, index) => {
                    const name = playerNames[index];
                    return !name || name.trim() === '';
                  },
                );

                if (hasEmpty) {
                  setError('Please fill in all player names');
                  return;
                }

                setError('');
                navigation.navigate('DifficultyCharadeGuessPage');
              }}
            />
            {error ? (
              <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>
                {error}
              </Text>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PlayerCharadeGuessNames;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#936dfe',
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
    color: '#fdd05b',
    fontSize: 64,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
