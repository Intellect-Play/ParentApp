import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import InfoButton from '../../../components/miniGames/infoButton';

const GuessShadowPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainScreen}>
      <View>
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
          <InfoButton
            message="Shadow Guess - How to Play
Guess the animal by looking at its shadow!
One player looks at the shadow image and gives clues without saying the name.
Others try to guess what animal it is.
Press “Show Answer” to reveal the correct answer.
Tap “Got it Right” or “Got it Wrong” to continue.
Reach 10 points to win the game!"
          />
        </View>
      </View>
    </SafeAreaView>
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
