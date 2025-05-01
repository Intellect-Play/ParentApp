import {StyleSheet, Text, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import DifficultyOptionButton from '../../../components/miniGames/ColorGuess/DifficultyOptionButton';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setDifficulty} from '../../../src/redux/games/charadeGuess/charadeGuessSlice';
import {
  EASY_MODE,
  HARD_MODE,
  MEDIUM_MODE,
} from '../../../gameSettings/CharadeGuess/settings';

const DifficultyCharadeGuessPage = () => {
  const dispatch = useDispatch();
  const selectedDifficulty = useSelector(
    state => state.charadeGuess.difficulty,
  );
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitleHeading}>difficulty</Text>
      <Text style={styles.pageTitleHeading2}>level</Text>

      <DifficultyOptionButton
        level="Easy"
        seconds={EASY_MODE}
        selected={selectedDifficulty === 'easy'}
        secondsColor="green"
        selectedColor="#fdd05b"
        onPress={() => dispatch(setDifficulty('easy'))}
      />

      <DifficultyOptionButton
        level="Medium"
        seconds={MEDIUM_MODE}
        selected={selectedDifficulty === 'medium'}
        secondsColor="orange"
        selectedColor="#fdd05b"
        onPress={() => dispatch(setDifficulty('medium'))}
      />

      <DifficultyOptionButton
        level="Hard"
        seconds={HARD_MODE}
        selected={selectedDifficulty === 'hard'}
        secondsColor="red"
        selectedColor="#fdd05b"
        onPress={() => dispatch(setDifficulty('hard'))}
      />

      <View style={styles.buttonContainer}>
        <ColorGuessButton
          title="Next"
          width={350}
          height={60}
          backgroundColor="#fdd05b"
          textColor="#333"
          borderRadius={20}
          onPress={() => navigation.navigate('CharadeGuessWordsPage')}
        />
      </View>
    </View>
  );
};

export default DifficultyCharadeGuessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#936dfe',
    alignItems: 'center',
    paddingTop: 80,
  },
  pageTitleHeading: {
    fontWeight: 'medium',
    color: '#ffff',
    fontSize: 60,
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
  buttonContainer: {
    marginTop: 30,
  },
});
