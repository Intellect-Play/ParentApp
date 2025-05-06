import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import DifficultyOptionButton from '../../../components/miniGames/ColorGuess/DifficultyOptionButton';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  EASY_MODE,
  HARD_MODE,
  MEDIUM_MODE,
} from '../../../gameSettings/shadowGuess/settings';
import {setDifficulty} from '../../../src/redux/games/shadowGuess/shadowGuessSlice';

const DifficultyShadowGuessPage = () => {
  const dispatch = useDispatch();
  const selectedDifficulty = useSelector(state => state.shadowGuess.difficulty);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitleHeading}>difficulty</Text>
      <Text style={styles.pageTitleHeading2}>level</Text>

      <DifficultyOptionButton
        level="Easy"
        seconds={EASY_MODE}
        selected={selectedDifficulty === 'easy'}
        secondsColor="green"
        selectedTextColor="#fff"
        selectedColor="#7985e9"
        onPress={() => dispatch(setDifficulty('easy'))}
      />

      <DifficultyOptionButton
        level="Medium"
        seconds={MEDIUM_MODE}
        selected={selectedDifficulty === 'medium'}
        secondsColor="orange"
        selectedColor="#7985e9"
        selectedTextColor="#fff"
        onPress={() => dispatch(setDifficulty('medium'))}
      />

      <DifficultyOptionButton
        level="Hard"
        seconds={HARD_MODE}
        selected={selectedDifficulty === 'hard'}
        secondsColor="red"
        selectedColor="#7985e9"
        selectedTextColor="#fff"
        onPress={() => dispatch(setDifficulty('hard'))}
      />

      <View style={styles.buttonContainer}>
        <ColorGuessButton
          title="Next"
          width={350}
          height={60}
          backgroundColor="#7985e9"
          textColor="#fff"
          borderRadius={20}
          onPress={() => navigation.navigate('ShadowGuessAnimalsPage')}
        />
      </View>
    </SafeAreaView>
  );
};

export default DifficultyShadowGuessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7eb7c',
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
    color: '#7985e9',
    fontSize: 64,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    marginTop: 30,
  },
});
