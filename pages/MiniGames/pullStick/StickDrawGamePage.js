import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import {
  drawStick,
  nextPlayer,
  setSticks,
} from '../../../src/redux/games/pullStick/pullStickSlice';

const StickDrawGamePage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    activePlayers,
    eliminatedPlayers,
    currentPlayerIndex,
    sticks,
    currentDraws,
    gameEnded,
    winner,
  } = useSelector(state => state.stickDraw);

  const currentPlayer = activePlayers[currentPlayerIndex];

  // İlk açılışta çubukları ayarla
  // useEffect(() => {
  //   if (sticks.length === 0) {
  //     const options = [17, 20, 23];
  //     const count = options[Math.floor(Math.random() * options.length)];
  //     dispatch(setSticks(count));
  //   }
  // }, [sticks, dispatch]);

  useEffect(() => {
    if (!gameEnded && sticks.length === 0 && activePlayers.length > 1) {
      const options = [17, 20, 23];
      const count = options[Math.floor(Math.random() * options.length)];
      dispatch(setSticks(count));
    }

    //eslint-disable-next-line
  }, [activePlayers.length, sticks.length, gameEnded]);

  // Otomatik geçiş
  useEffect(() => {
    if (currentDraws >= 3) {
      const timeout = setTimeout(() => {
        dispatch(nextPlayer());
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentDraws, dispatch]);

  useEffect(() => {
    if (gameEnded && winner) {
      const timeout = setTimeout(() => {
        navigation.navigate('StickDrawWinPage');
      }, 0); // 1.5 saniye sonra geçiş
      return () => clearTimeout(timeout);
    }
  }, [gameEnded, winner, navigation]);

  const handleDraw = () => {
    dispatch(drawStick());
  };

  const handleNext = () => {
    dispatch(nextPlayer());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pull the Stick!</Text>

      <>
        <Text style={styles.playerText}>Current Player: {currentPlayer}</Text>
        <Text style={styles.drawText}>Draws this turn: {currentDraws}/3</Text>

        <FlatList
          data={sticks}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={[
                styles.stick,
                {backgroundColor: item ? '#ecfd5a' : '#ccc'},
              ]}
            />
          )}
          contentContainerStyle={styles.stickContainer}
        />

        <View style={styles.buttonContainer}>
          <ColorGuessButton
            title="Draw Stick"
            backgroundColor="#ecfd5a"
            onPress={handleDraw}
            width={150}
          />

          {currentDraws >= 1 && (
            <ColorGuessButton
              title="Next"
              backgroundColor="#faebc0"
              onPress={handleNext}
              width={150}
            />
          )}
        </View>
      </>

      {eliminatedPlayers.length > 0 && (
        <View style={styles.eliminatedContainer}>
          <Text style={styles.eliminatedTitle}>Eliminated:</Text>
          {eliminatedPlayers.map(name => (
            <Text key={name} style={styles.eliminatedName}>
              ❌ {name}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default StickDrawGamePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7cd7eb',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  playerText: {
    fontSize: 22,
    marginBottom: 10,
  },
  drawText: {
    fontSize: 18,
    marginBottom: 20,
  },
  stickContainer: {
    marginVertical: 20,
    gap: 10,
    alignItems: 'center',
  },
  stick: {
    width: 250,
    height: 6,
    borderRadius: 4,
    marginVertical: 2,
  },
  relative: {
    position: 'relative',
  },
  eliminatedContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 30,
  },
  eliminatedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eliminatedName: {
    fontSize: 16,
    color: '#444',
    marginTop: 4,
  },
  winnerText: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    position: 'absolute',
    bottom: 80,
  },

  topButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
  },
});
