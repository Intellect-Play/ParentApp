import {StyleSheet, Text, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';

const GuessWordsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitleHeading}>Guess</Text>
      <Text style={styles.pageTitleHeading2}>2 words</Text>

      <View style={styles.buttonContainer}>
        <ColorGuessButton width={150} title="Got it wrong" />
        <ColorGuessButton
          width={150}
          backgroundColor="#5df9f6"
          title="Got it right"
        />
      </View>
    </View>
  );
};

export default GuessWordsPage;

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
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
