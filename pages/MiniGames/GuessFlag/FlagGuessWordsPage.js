import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import {
  endGame,
  incrementScore,
  showAnswerNow,
} from '../../../src/redux/games/flagGuess/flagGuessSlice';

const FlagGuessWordsPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    playerNames,
    currentPlayerIndex,
    scores,
    timePerRound,
    flags,
    showAnswer,
  } = useSelector(state => state.flagGuess);
  const currentRound = useSelector(state => state.flagGuess.currentRound);
  const currentPlayer = playerNames[currentPlayerIndex];

  const [timeLeft, setTimeLeft] = useState(timePerRound);
  const [lastIndex, setLastIndex] = useState(null);
  const [randomFlagIndex, setRandomFlagIndex] = useState(null);

  const getRandomIndex = () => {
    if (flags.length <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flags.length);
    } while (newIndex === lastIndex);
    return newIndex;
  };

  useEffect(() => {
    const index = getRandomIndex();
    setRandomFlagIndex(index);
    setLastIndex(index);

    //eslint-disable-next-line
  }, [currentPlayerIndex, currentRound]);

  const currentFlag = flags[randomFlagIndex];

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

  const handleCorrect = () => {
    dispatch(incrementScore(currentPlayer));
    navigation.navigate('WinFlagGuessPage', {winner: currentPlayer});
  };

  const handleWrong = () => {
    navigation.navigate('WinFlagGuessPage', {winner: currentPlayer});
  };

  const handleShowAnswer = () => {
    dispatch(showAnswerNow());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitleHeading}>Guess</Text>
      <Text style={styles.pageTitleHeading2}>the Country</Text>

      <View style={styles.emojiBox}>
        <Text style={styles.emojiText}>{currentFlag?.emoji}</Text>
      </View>

      <ColorGuessButton
        width={150}
        title={showAnswer ? currentFlag?.answer : 'Show Answer'}
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
    </View>
  );
};

export default FlagGuessWordsPage;

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
