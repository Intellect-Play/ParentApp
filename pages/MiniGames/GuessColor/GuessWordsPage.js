import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {
  addAnsweredPlayer,
  endGame,
  incrementScore,
  nextPlayer,
  resetAnsweredPlayers,
} from '../../../src/redux/games/colorGuess/colorGuessSlice';
import {useNavigation} from '@react-navigation/native';
const colors = ['White', 'Purple', 'Green', 'Yellow', 'Orange', 'Blue'];

const colorMap = {
  White: '#ebece9',
  Purple: '#8e36d1',
  Green: '#47d031',
  Yellow: '#ffcd00',
  Orange: '#ff8400',
  Blue: '#0cd0da',
};

const GuessWordsPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const playerNames = useSelector(state => state.colorGuess.playerNames);
  const currentIndex = useSelector(
    state => state.colorGuess.currentPlayerIndex,
  );
  const scores = useSelector(state => state.colorGuess.scores);
  const timePerRound = useSelector(state => state.colorGuess.timePerRound);
  const currentRound = useSelector(state => state.colorGuess.currentRound);
  const answeredPlayers = useSelector(
    state => state.colorGuess.answeredPlayers,
  );

  const currentPlayer = playerNames[currentIndex];
  const [timeLeft, setTimeLeft] = useState(timePerRound);
  const [currentColor, setCurrentColor] = useState('');

  // Yeni renk seç her oyuncu değiştiğinde
  useEffect(() => {
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
    setTimeLeft(timePerRound);
  }, [currentIndex, timePerRound, currentRound]);

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

  // const handleCorrect = () => {
  //   dispatch(incrementScore(currentPlayer));
  //   navigation.navigate('WinColorGuessPage', {winner: currentPlayer});
  // };

  // const handleWrong = () => {
  //   navigation.navigate('WinColorGuessPage', {winner: currentPlayer});
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
      navigation.navigate('WinColorGuessPage', {scores});
      dispatch(resetAnsweredPlayers());
    }
  }, [answeredPlayers, dispatch, navigation, playerNames.length, scores]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitleHeading}>Guess</Text>
      <Text style={styles.pageTitleHeading2}>2 words</Text>

      <View style={styles.forBorder}>
        <View
          style={[
            styles.colorCircle,
            {backgroundColor: colorMap[currentColor] || '#000'},
          ]}
        />
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
          backgroundColor="#5df9f6"
          title="Got it right"
          onPress={handleCorrect}
        />
      </View>
    </SafeAreaView>
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
});
