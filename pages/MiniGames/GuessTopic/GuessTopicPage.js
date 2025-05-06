import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import InfoButton from '../../../components/miniGames/infoButton';

const GuessTopicPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainScreen}>
      <View>
        <View style={styles.centeredItems}>
          <View style={[styles.centeredItems, styles.imageContainer]}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/miniGames/topicGuess/topicGuess.png')}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <ColorGuessButton
              title="Play"
              width={350}
              height={60}
              backgroundColor="#ecfd5a"
              textColor="#333"
              borderRadius={20}
              onPress={() => {
                navigation.navigate('EnterNumberOfPlayersTopicGuess');
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
            message="Guess Topic - How to Play

Imitate or describe the topic shown on the screen without saying any part of it!
The topic could be a famous person, a car brand, a cartoon character, or more.
Others try to guess the correct answer.
Press “Show Answer” if needed.
Click “Got it Right” or “Got it Wrong” to move to the next round.
The first player to reach 10 points wins the game!"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GuessTopicPage;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#7cd7eb',
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
    height: 550,
    objectFit: 'cover',
  },
  buttonsContainer: {
    display: 'flex',
    marginTop: 20,
    flexDirection: 'column',
    gap: '25',
  },
});
