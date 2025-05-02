import {Image, StyleSheet, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import InfoButton from '../../../components/miniGames/infoButton';

const GuessKeyPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainScreen}>
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
              navigation.navigate('EnterNumberOfPlayersKeyGuess');
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
          message="You'll see 3 related clues — for example: book, pen, notebook.Your task is to guess the key word that connects them all — in this case: student. Work together or challenge each other! The faster you guess, the better your chances of winning!
"
        />
      </View>
    </View>
  );
};

export default GuessKeyPage;

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
