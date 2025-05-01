import {Image, StyleSheet, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import InfoButton from '../../../components/miniGames/infoButton';

// imperson
const GuessCharadePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainScreen}>
      <View style={styles.centeredItems}>
        <View style={[styles.centeredItems, styles.imageContainer]}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/miniGames/CharadeGuess/charade.png')}
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
              navigation.navigate('EnterNumberOfPlayersCharadeGuess');
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
        <InfoButton message=" " />
      </View>
    </View>
  );
};

export default GuessCharadePage;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#936dfe',
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
