import {Image, StyleSheet, Text, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';

const GuessColorPage = () => {
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
          />

          <ColorGuessButton
            title="Quit"
            width={350}
            height={60}
            backgroundColor="#fff"
            textColor="#333"
            borderRadius={20}
          />
        </View>
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
