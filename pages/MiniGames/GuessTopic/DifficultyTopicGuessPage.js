import {StyleSheet, Text, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import DifficultyOptionButton from '../../../components/miniGames/ColorGuess/DifficultyOptionButton';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  EASY_MODE,
  HARD_MODE,
  MEDIUM_MODE,
} from '../../../gameSettings/TopicGuess/settings';
import {setDifficulty} from '../../../src/redux/games/topicGuess/topicGuessSlice';

const DifficultyTopicGuessPage = () => {
  const dispatch = useDispatch();
  const selectedDifficulty = useSelector(state => state.topicGuess.difficulty);
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
        selectedColor="#ecfd5a"
        onPress={() => dispatch(setDifficulty('easy'))}
      />

      <DifficultyOptionButton
        level="Medium"
        seconds={MEDIUM_MODE}
        selected={selectedDifficulty === 'medium'}
        secondsColor="orange"
        selectedColor="#ecfd5a"
        onPress={() => dispatch(setDifficulty('medium'))}
      />

      <DifficultyOptionButton
        level="Hard"
        seconds={HARD_MODE}
        selected={selectedDifficulty === 'hard'}
        secondsColor="red"
        selectedColor="#ecfd5a"
        onPress={() => dispatch(setDifficulty('hard'))}
      />

      <View style={styles.buttonContainer}>
        <ColorGuessButton
          title="Next"
          width={350}
          height={60}
          backgroundColor="#ecfd5a"
          textColor="#333"
          borderRadius={20}
          onPress={() => navigation.navigate('EmojiGuessWordsPage')}
        />
      </View>
    </View>
  );
};

export default DifficultyTopicGuessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7cd7eb',
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
    color: '#ecfd5a',
    fontSize: 64,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    marginTop: 30,
  },
});
