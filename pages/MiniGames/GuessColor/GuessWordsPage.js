import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {
  endGame,
  incrementScore,
  nextPlayer,
} from '../../../src/redux/games/colorGuess/colorGuessSlice';
import {useNavigation} from '@react-navigation/native';
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple'];

const GuessWordsPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const playerNames = useSelector(state => state.colorGuess.playerNames);
  const currentIndex = useSelector(
    state => state.colorGuess.currentPlayerIndex,
  );
  const scores = useSelector(state => state.colorGuess.scores);
  const timePerRound = useSelector(state => state.colorGuess.timePerRound);

  const currentPlayer = playerNames[currentIndex];
  const [timeLeft, setTimeLeft] = useState(timePerRound);
  const [currentColor, setCurrentColor] = useState('');

  // Yeni renk seç her oyuncu değiştiğinde
  useEffect(() => {
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
    setTimeLeft(timePerRound);
  }, [currentIndex, timePerRound]);

  // Zamanlayıcı
  useEffect(() => {
    if (timeLeft === 0) {
      dispatch(nextPlayer());
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, timeLeft]);

  useEffect(() => {
    const winner = Object.entries(scores).find(([_, score]) => score >= 10);

    if (winner) {
      const [winnerName] = winner;
      dispatch(endGame());
      navigation.navigate('WinColorGuessPage', {winner: winnerName});
    }
  }, [scores, dispatch, navigation]);

  const handleCorrect = () => {
    dispatch(incrementScore(currentPlayer));
    dispatch(nextPlayer());
  };

  const handleWrong = () => {
    dispatch(nextPlayer());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Time left: {timeLeft}s</Text>
      <Text style={styles.player}>
        {currentPlayer}'s turn - Score: {scores[currentPlayer]}
      </Text>

      <Text style={styles.pageTitleHeading}>Say something</Text>
      <Text style={styles.pageTitleHeading2}>{currentColor}</Text>

      <View style={styles.buttonContainer}>
        <ColorGuessButton
          width={150}
          title="Got it wrong"
          onPress={handleWrong}
        />
        <ColorGuessButton
          width={150}
          backgroundColor="#5df9f6"
          title="Got it right"
          onPress={handleCorrect}
        />
      </View>
    </View>
  );
};

export default GuessWordsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7985e9',
    alignItems: 'center',
    paddingTop: 80,
  },
  timer: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  player: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 30,
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
    color: '#5df9f6',
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
});
