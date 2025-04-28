import {StyleSheet, Text, View} from 'react-native';
import DifficultyOptionButton from '../../../components/miniGames/ColorGuess/DifficultyOptionButton';
import {setDifficulty} from '../../../src/redux/games/colorGuess/colorGuessSlice';
import {useDispatch, useSelector} from 'react-redux';

const DifficultyPage = () => {
  const dispatch = useDispatch();
  const selectedDifficulty = useSelector(state => state.colorGuess.difficulty);

  return (
    <View style={styles.container}>
      <Text>SAAMEYKIM</Text>

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
});
