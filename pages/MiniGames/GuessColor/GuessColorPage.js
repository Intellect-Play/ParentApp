import {Image, StyleSheet, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import InfoButton from '../../../components/miniGames/infoButton';

// imperson
const GuessColorPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainScreen}>
      <View style={styles.centeredItems}>
        <View style={[styles.centeredItems, styles.imageContainer]}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/miniGames/ColorGuess/guessByColor.png')}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <ColorGuessButton
            title="Play"
            width={350}
            height={60}
            backgroundColor="#fff"
            textColor="#333"
            borderRadius={20}
            onPress={() => {
              navigation.navigate('EnterNumberOfPlayersColorGuess');
            }}
          />

          <ColorGuessButton
            title="Quit"
            width={350}
            height={60}
            backgroundColor="#fff"
            textColor="#333"
            borderRadius={20}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <InfoButton message="Color Guess is a turn-based party game where players must describe objects that match a randomly shown color. Each player takes turns guessing based on the color prompt. Correct guesses earn points. The first player to reach 10 points wins the game!" />
      </View>
    </View>
  );
};

export default GuessColorPage;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#7985e9',
  },
  centeredItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50,
    marginRight: 10,
  },
  image: {
    width: 390,
    height: 520,
    objectFit: 'cover',
  },
  buttonsContainer: {
    display: 'flex',
    marginTop: 20,
    flexDirection: 'column',
    gap: '25',
  },
});
