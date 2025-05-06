import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {setDifficulty} from '../../../src/redux/games/emojiGuess/emojiGuessSlice';
import DifficultyOptionButton from '../../../components/miniGames/ColorGuess/DifficultyOptionButton';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  EASY_MODE,
  HARD_MODE,
  MEDIUM_MODE,
} from '../../../gameSettings/EmojiGuess/settings';

const DifficultyEmojiGuessPage = () => {
  const dispatch = useDispatch();
  const selectedDifficulty = useSelector(state => state.emojiGuess.difficulty);
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
            onPress={() => navigation.navigate('EmojiGuessWordsPage')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DifficultyEmojiGuessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e97a91',
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
