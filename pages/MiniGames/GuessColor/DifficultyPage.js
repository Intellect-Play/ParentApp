import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DifficultyOptionButton from '../../../components/miniGames/ColorGuess/DifficultyOptionButton';
import {setDifficulty} from '../../../src/redux/games/colorGuess/colorGuessSlice';
import {useDispatch, useSelector} from 'react-redux';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import {
  EASY_MODE,
  HARD_MODE,
  MEDIUM_MODE,
} from '../../../gameSettings/ColorGuess/settings';

const DifficultyPage = () => {
  const dispatch = useDispatch();
  const selectedDifficulty = useSelector(state => state.colorGuess.difficulty);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.pageTitleHeading}>difficulty</Text>
        <Text style={styles.pageTitleHeading2}>level</Text>

        <DifficultyOptionButton
          level="Easy"
          seconds={EASY_MODE}
          selected={selectedDifficulty === 'easy'}
          secondsColor="green"
          onPress={() => dispatch(setDifficulty('easy'))}
        />

        <DifficultyOptionButton
          level="Medium"
          seconds={MEDIUM_MODE}
          selected={selectedDifficulty === 'medium'}
          secondsColor="orange"
          onPress={() => dispatch(setDifficulty('medium'))}
        />

        <DifficultyOptionButton
          level="Hard"
          seconds={HARD_MODE}
          selected={selectedDifficulty === 'hard'}
          secondsColor="red"
          onPress={() => dispatch(setDifficulty('hard'))}
        />

        <View style={styles.buttonContainer}>
          <ColorGuessButton
            title="Next"
            width={350}
            height={60}
            backgroundColor="#5df9f6"
            textColor="#333"
            borderRadius={20}
            onPress={() => navigation.navigate('GuessWordsPage')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DifficultyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7985e9',
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
    color: '#5df9f6',
    fontSize: 64,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    marginTop: 30,
  },
});
