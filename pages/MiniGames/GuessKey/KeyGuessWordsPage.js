import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import {
  addAnsweredPlayer,
  endGame,
  incrementScore,
  nextPlayer,
  resetAnsweredPlayers,
  showAnswerNow,
} from '../../../src/redux/games/keyGuess/keyGuessSlice';
import keys from '../../../gameSettings/keyGuess/keys';

const KeyGuessWordsPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {playerNames, currentPlayerIndex, scores, timePerRound, showAnswer} =
    useSelector(state => state.keyGuess);
  const currentRound = useSelector(state => state.keyGuess.currentRound);
  const currentPlayer = playerNames[currentPlayerIndex];
  const answeredPlayers = useSelector(state => state.keyGuess.answeredPlayers);

  const [timeLeft, setTimeLeft] = useState(timePerRound);
  const [lastIndex, setLastIndex] = useState(null);
  const [randomKeyIndex, setRandomKeyIndex] = useState(null);

  const getRandomIndex = () => {
    if (keys.length <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * keys.length);
    } while (newIndex === lastIndex);
    return newIndex;
  };

  useEffect(() => {
    const index = getRandomIndex();
    setRandomKeyIndex(index);
    setLastIndex(index);

    //eslint-disable-next-line
  }, [currentPlayerIndex, currentRound]);

  const currentKey = keys[randomKeyIndex];

  useEffect(() => {
    setTimeLeft(timePerRound);
  }, [currentPlayerIndex, timePerRound]);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // const handleCorrect = () => {
  //   dispatch(incrementScore(currentPlayer));
  //   navigation.navigate('WinKeyGuessPage', {winner: currentPlayer});
  // };

  // const handleWrong = () => {
  //   navigation.navigate('WinKeyGuessPage', {winner: currentPlayer});
  // };

  const handleShowAnswer = () => {
    dispatch(showAnswerNow());
  };

  const handleCorrect = () => {
    dispatch(incrementScore(currentPlayer));
    dispatch(addAnsweredPlayer(currentPlayer));
    dispatch(nextPlayer());
  };

  const handleWrong = () => {
    dispatch(addAnsweredPlayer(currentPlayer));
    dispatch(nextPlayer());
  };

  useEffect(() => {
    if (answeredPlayers.length === playerNames.length) {
      dispatch(endGame());
      navigation.navigate('WinKeyGuessPage', {scores});
      dispatch(resetAnsweredPlayers());
    }
  }, [answeredPlayers, dispatch, navigation, playerNames.length, scores]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitleHeading}>Guess</Text>
      <Text style={styles.pageTitleHeading2}>the Word</Text>

      <View style={styles.emojiBox}>
        <Text style={styles.emojiText}>{currentKey?.clues?.join(' + ')}</Text>
      </View>

      <ColorGuessButton
        width={150}
        title={showAnswer ? currentKey?.answer : 'Show Answer'}
        backgroundColor="#fdd05b"
        onPress={handleShowAnswer}
      />

      <View style={styles.textCenter}>
        <Text style={[styles.player, styles.textCenter]}>
          {currentPlayer}'s turn
        </Text>
        <Text style={[styles.textCenter, styles.scoreText]}>
          Score: {scores[currentPlayer]}
        </Text>
        <Text style={[styles.timer, styles.textCenter]}>
          {timeLeft > 0 ? `in ${timeLeft} seconds` : 'Time is up!'}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <ColorGuessButton
          width={150}
          title="Got it wrong"
          onPress={handleWrong}
        />
        <ColorGuessButton
          width={150}
          backgroundColor="#fdd05b"
          title="Got it right"
          onPress={handleCorrect}
        />
      </View>
    </SafeAreaView>
  );
};
export default KeyGuessWordsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e97a91',
    alignItems: 'center',
    paddingTop: 80,
  },
  timer: {
    color: '#fff',
    fontSize: 16,
    marginTop: 2,
  },
  player: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
  },
  pageTitleHeading: {
    fontWeight: 'medium',
    color: '#ffff',
    fontSize: 40,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  pageTitleHeading2: {
    color: '#fdd05b',
    fontSize: 64,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 40,
  },
  colorCircle: {
    width: 250,
    height: 250,
    borderRadius: 200,
    backgroundColor: '#000',
    marginVertical: 20,
    borderWidth: 7,
    borderColor: '#fff',
  },
  forBorder: {
    width: 270,
    height: 270,
    borderRadius: 150,
    borderWidth: 10,
    borderColor: '#b7bde2',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  scoreText: {
    color: '#ffff',
  },
  textCenter: {
    textAlign: 'center',
  },
  emojiBox: {
    width: 250,
    height: 250,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginVertical: 20,
    borderWidth: 4,
    borderColor: '#ecfd5a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  emojiText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'LuckiestGuy-Regular',
  },
  answerText: {
    color: '#fff',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
