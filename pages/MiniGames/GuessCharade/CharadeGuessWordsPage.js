import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import {
  endGame,
  incrementScore,
} from '../../../src/redux/games/charadeGuess/charadeGuessSlice';
import charades from '../../../gameSettings/CharadeGuess/charades';

const CharadeGuessWordsPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const playerNames = useSelector(state => state.charadeGuess.playerNames);
  const currentIndex = useSelector(
    state => state.charadeGuess.currentPlayerIndex,
  );
  const scores = useSelector(state => state.charadeGuess.scores);
  const timePerRound = useSelector(state => state.charadeGuess.timePerRound);
  const currentRound = useSelector(state => state.charadeGuess.currentRound);

  const currentPlayer = playerNames[currentIndex];
  const [timeLeft, setTimeLeft] = useState(timePerRound);
  const [currentCharade, setCurrentCharade] = useState('');

  useEffect(() => {
    let newCharade;
    do {
      newCharade = charades[Math.floor(Math.random() * charades.length)];
    } while (newCharade === currentCharade);
    setCurrentCharade(newCharade);
    setTimeLeft(timePerRound);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, currentRound, timePerRound]);

  // Zamanlayıcı
  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, timeLeft]);

  // useEffect(() => {
  //   const winner = Object.entries(scores).find(([_, score]) => score >= 10);

  //   if (winner) {
  //     const [winnerName] = winner;
  //     dispatch(endGame());
  //     navigation.navigate('WinColorGuessPage', {winner: winnerName});
  //   }
  // }, [scores, dispatch, navigation]);

  const handleCorrect = () => {
    dispatch(incrementScore(currentPlayer));
    navigation.navigate('WinCharadeGuessPage', {winner: currentPlayer});
  };

  const handleWrong = () => {
    navigation.navigate('WinCharadsGuessPage', {winner: currentPlayer});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitleHeading}>Guess</Text>
      <Text style={styles.pageTitleHeading2}>Charades</Text>

      <View style={styles.topicBox}>
        <Text style={styles.topicText}>{currentCharade}</Text>
      </View>

      <View style={styles.textCenter}>
        {currentPlayer ? (
          <>
            <Text style={[styles.player, styles.textCenter]}>
              {currentPlayer}'s turn
            </Text>
            <Text style={[styles.textCenter, styles.scoreText]}>
              {' '}
              Score: {scores[currentPlayer]}
            </Text>
            <Text style={[styles.timer, styles.textCenter]}>
              {timeLeft > 0 ? `in ${timeLeft} seconds` : 'Time is up!'}
            </Text>
          </>
        ) : (
          <Text style={styles.player}>Waiting...</Text>
        )}
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

export default CharadeGuessWordsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#936dfe',
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
  topicBox: {
    width: 250,
    height: 250,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginVertical: 20,
    borderWidth: 4,
    borderColor: '#fdd05b',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  topicText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'LuckiestGuy-Regular',
  },
});
