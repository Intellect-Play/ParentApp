import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import topics from '../../../gameSettings/TopicGuess/topics';
import {
  addAnsweredPlayer,
  endGame,
  incrementScore,
  nextPlayer,
  resetAnsweredPlayers,
} from '../../../src/redux/games/topicGuess/topicGuessSlice';

const TopicGuessCategoriesPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const playerNames = useSelector(state => state.topicGuess.playerNames);
  const currentIndex = useSelector(
    state => state.topicGuess.currentPlayerIndex,
  );
  const scores = useSelector(state => state.topicGuess.scores);
  const timePerRound = useSelector(state => state.topicGuess.timePerRound);
  const currentRound = useSelector(state => state.topicGuess.currentRound);
  const answeredPlayers = useSelector(
    state => state.topicGuess.answeredPlayers,
  );
  const currentPlayer = playerNames[currentIndex];
  const [timeLeft, setTimeLeft] = useState(timePerRound);
  const [currentTopic, setCurrentTopic] = useState('');

  useEffect(() => {
    let newTopic;
    do {
      newTopic = topics[Math.floor(Math.random() * topics.length)];
    } while (newTopic === currentTopic);
    setCurrentTopic(newTopic);
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

  // const handleCorrect = () => {
  //   dispatch(incrementScore(currentPlayer));
  //   navigation.navigate('WinTopicGuessPage', {winner: currentPlayer});
  // };

  // const handleWrong = () => {
  //   navigation.navigate('WinTopicGuessPage', {winner: currentPlayer});
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
      navigation.navigate('WinTopicGuessPage', {scores});
      dispatch(resetAnsweredPlayers());
    }
  }, [answeredPlayers, dispatch, navigation, playerNames.length, scores]);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitleHeading}>Guess</Text>
      <Text style={styles.pageTitleHeading2}>words</Text>

      <View style={styles.topicBox}>
        <Text style={styles.topicText}>{currentTopic}</Text>
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
          backgroundColor="#ecfd5a"
          title="Got it right"
          onPress={handleCorrect}
        />
      </View>
    </View>
  );
};

export default TopicGuessCategoriesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7cd7eb',
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
    color: '#ecfd5a',
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
    borderColor: '#ecfd5a',
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
