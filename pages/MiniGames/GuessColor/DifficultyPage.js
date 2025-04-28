import {StyleSheet, Text, View} from 'react-native';
import DifficultyOptionButton from '../../../components/miniGames/ColorGuess/DifficultyOptionButton';
import {setDifficulty} from '../../../src/redux/games/colorGuess/colorGuessSlice';
import {useDispatch, useSelector} from 'react-redux';

const DifficultyPage = () => {
  const dispatch = useDispatch();
  const selectedDifficulty = useSelector(state => state.colorGuess.difficulty);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitleHeading}>difficulty</Text>
      <Text style={styles.pageTitleHeading2}>level</Text>

      <DifficultyOptionButton
        level="Easy"
        seconds={15}
        selected={selectedDifficulty === 'easy'}
        secondsColor="green"
        onPress={() => dispatch(setDifficulty('easy'))}
      />

      <DifficultyOptionButton
        level="Medium"
        seconds={10}
        selected={selectedDifficulty === 'medium'}
        secondsColor="orange"
        onPress={() => dispatch(setDifficulty('medium'))}
      />

      <DifficultyOptionButton
        level="Hard"
        seconds={5}
        selected={selectedDifficulty === 'hard'}
        secondsColor="red"
        onPress={() => dispatch(setDifficulty('hard'))}
      />
    </View>
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
});
