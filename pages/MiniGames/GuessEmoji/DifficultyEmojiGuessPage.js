import {StyleSheet, Text, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {setDifficulty} from '../../../src/redux/games/emojiGuess/emojiGuessSlice';
import DifficultyOptionButton from '../../../components/miniGames/ColorGuess/DifficultyOptionButton';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const DifficultyEmojiGuessPage = () => {
  const dispatch = useDispatch();
  const selectedDifficulty = useSelector(state => state.emojiGuess.difficulty);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitleHeading}>difficulty</Text>
      <Text style={styles.pageTitleHeading2}>level</Text>

      <DifficultyOptionButton
        level="Easy"
        seconds={15}
        selected={selectedDifficulty === 'easy'}
        secondsColor="green"
        selectedColor="#fdd05b"
        onPress={() => dispatch(setDifficulty('easy'))}
      />

      <DifficultyOptionButton
        level="Medium"
        seconds={10}
        selected={selectedDifficulty === 'medium'}
        secondsColor="orange"
        selectedColor="#fdd05b"
        onPress={() => dispatch(setDifficulty('medium'))}
      />

      <DifficultyOptionButton
        level="Hard"
        seconds={5}
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
