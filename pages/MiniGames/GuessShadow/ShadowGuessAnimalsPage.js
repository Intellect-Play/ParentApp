import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
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
} from '../../../src/redux/games/shadowGuess/shadowGuessSlice';
import shadows from '../../../gameSettings/shadowGuess/shadows';

const ShadowGuessAnimalsPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {playerNames, currentPlayerIndex, scores, timePerRound, showAnswer} =
    useSelector(state => state.shadowGuess);
  const currentRound = useSelector(state => state.shadowGuess.currentRound);
  const currentPlayer = playerNames[currentPlayerIndex];

  const [timeLeft, setTimeLeft] = useState(timePerRound);
  const [lastIndex, setLastIndex] = useState(null);
  const [randomShadowIndex, setRandomShadowIndex] = useState(null);
  const currentShadow = shadows[randomShadowIndex];
  const answeredPlayers = useSelector(
    state => state.shadowGuess.answeredPlayers,
  );

  const getRandomIndex = () => {
    if (shadows.length <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * shadows.length);
    } while (newIndex === lastIndex);
    return newIndex;
  };

  useEffect(() => {
    const index = getRandomIndex();
    setRandomShadowIndex(index);
    setLastIndex(index);

    //eslint-disable-next-line
  }, [currentPlayerIndex, currentRound]);

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

  // useEffect(() => {
  //   const winner = Object.entries(scores).find(([_, score]) => score >= 10);
  //   if (winner) {
  //     const [winnerName] = winner;
  //     dispatch(endGame());
  //     navigation.navigate('WinEmojiGuessPage', {winner: winnerName});
  //   }
  // }, [scores, dispatch, navigation]);

  // const handleCorrect = () => {
  //   dispatch(incrementScore(currentPlayer));
  //   navigation.navigate('WinShadowGuessPage', {winner: currentPlayer});
  // };

  // const handleWrong = () => {
  //   navigation.navigate('WinShadowGuessPage', {winner: currentPlayer});
  // };

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
      navigation.navigate('WinShadowGuessPage', {scores});
      dispatch(resetAnsweredPlayers());
    }
  }, [answeredPlayers, dispatch, navigation, playerNames.length, scores]);

  const handleShowAnswer = () => {
    dispatch(showAnswerNow());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitleHeading}>Guess</Text>
      <Text style={styles.pageTitleHeading2}>the Word</Text>

      {/* Emoji gösterimi */}
      <View style={styles.emojiBox}>
        <Image
          source={currentShadow?.image}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
      </View>
      <ColorGuessButton
        width={150}
        title={showAnswer ? currentShadow?.answer : 'Show Answer'}
        backgroundColor="#7985e9"
        textColor="#fff"
        onPress={handleShowAnswer}
      />

      {/* Oyuncu info */}
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

      {/* Butonlar */}
      <View style={styles.buttonContainer}>
        <ColorGuessButton
          width={150}
          title="Got it wrong"
          onPress={handleWrong}
        />
        <ColorGuessButton
          width={150}
          backgroundColor="#7985e9"
          textColor="#fff"
          title="Got it right"
          onPress={handleCorrect}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShadowGuessAnimalsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7eb7c',
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
    color: '#black',
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
    color: '#7985e9',
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
    color: '#7985e9',
  },
  textCenter: {
    textAlign: 'center',
  },
  emojiBox: {
    padding: 20,
    marginVertical: 20,
    minWidth: 200,
  },
  emojiText: {
    fontSize: 50,
    textAlign: 'center',
  },
  answerText: {
    color: '#fff',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
