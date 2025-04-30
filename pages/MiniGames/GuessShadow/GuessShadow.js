import {Image, StyleSheet, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import InfoButton from '../../../components/miniGames/infoButton';

const GuessShadowPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainScreen}>
      <View style={styles.centeredItems}>
        <View style={[styles.centeredItems, styles.imageContainer]}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/miniGames/shadows/shadowGuess.png')}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <ColorGuessButton
            title="Play"
            width={350}
            height={60}
            backgroundColor="#7985e9"
            textColor="#fff"
            borderRadius={20}
            onPress={() => {
              navigation.navigate('EnterNumberOfPlayersShadowGuess');
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
        <InfoButton message="Emoji Guess is a fun guessing game where players see a set of emojis and try to guess the word they represent. Each round, a different player gives clues based on the emojis. Points are earned for correct answers. First to 10 points wins!" />
      </View>
    </View>
  );
};

export default GuessShadowPage;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#a7eb7c',
  },
  centeredItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50,
    marginRight: 30,
  },
  image: {
    width: 410,
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
