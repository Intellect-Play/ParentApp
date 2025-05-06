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
} from '../../../src/redux/games/emojiGuess/emojiGuessSlice';

const EmojiGuessWordsPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    playerNames,
    currentPlayerIndex,
    scores,
    timePerRound,
    emojis,
    showAnswer,
  } = useSelector(state => state.emojiGuess);
  const currentRound = useSelector(state => state.emojiGuess.currentRound);
  const answeredPlayers = useSelector(
    state => state.emojiGuess.answeredPlayers,
  );
  const currentPlayer = playerNames[currentPlayerIndex];

  const [timeLeft, setTimeLeft] = useState(timePerRound);
  const [lastIndex, setLastIndex] = useState(null);
  const [randomEmojiIndex, setRandomEmojiIndex] = useState(null);

  const getRandomIndex = () => {
    if (emojis.length <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * emojis.length);
    } while (newIndex === lastIndex);
    return newIndex;
  };

  useEffect(() => {
    const index = getRandomIndex();
    setRandomEmojiIndex(index);
    setLastIndex(index);

    //eslint-disable-next-line
  }, [currentPlayerIndex, currentRound]);

  const currentEmoji = emojis[randomEmojiIndex];

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
  //   navigation.navigate('WinEmojiGuessPage', {winner: currentPlayer});
  // };

  // const handleWrong = () => {
  //   navigation.navigate('WinEmojiGuessPage', {winner: currentPlayer});
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
      navigation.navigate('WinEmojiGuessPage', {scores});
      dispatch(resetAnsweredPlayers());
    }
  }, [answeredPlayers, dispatch, navigation, playerNames.length, scores]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitleHeading}>Guess</Text>
      <Text style={styles.pageTitleHeading2}>the Word</Text>

      {/* Emoji gösterimi */}
      <View style={styles.emojiBox}>
        <Text style={styles.emojiText}>{currentEmoji?.emojis.join(' + ')}</Text>
      </View>
      <ColorGuessButton
        width={150}
        title={showAnswer ? currentEmoji?.answer : 'Show Answer'}
        backgroundColor="#fdd05b"
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
          backgroundColor="#fdd05b"
          title="Got it right"
          onPress={handleCorrect}
        />
      </View>
    </SafeAreaView>
  );
};

export default EmojiGuessWordsPage;

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
