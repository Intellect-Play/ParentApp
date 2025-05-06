import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import InfoButton from '../../../components/miniGames/infoButton';

const GuessFlagPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainScreen}>
      <View>
        <View style={styles.centeredItems}>
          <View style={[styles.centeredItems, styles.imageContainer]}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/miniGames/EmojiGuess/emojiGuess.png')}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <ColorGuessButton
              title="Play"
              width={350}
              height={60}
              backgroundColor="#fdd05b"
              textColor="#333"
              borderRadius={20}
              onPress={() => {
                navigation.navigate('EnterNumberOfPlayersFlagGuess');
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
          <InfoButton
            message="A flag emoji will appear on the screen.
Your mission: Guess which country it belongs to!
Some are easy 🇫🇷, some will make you think 🇧🇹...
Get it right to earn points.
Can you recognize them all?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GuessFlagPage;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#e97a91',
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
