import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const WinColorGuessPage = ({route}) => {
  const {winner} = route.params;
  const scores = useSelector(state => state.colorGuess.scores);

  // Skorları yüksekten düşüğe sırala
  const sortedPlayers = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  return (
    <View style={styles.container}>
      <Text style={styles.winnerText}>🎉 {winner} Wins! 🎉</Text>
      <Text style={styles.leaderboardTitle}>Leaderboard</Text>

      {sortedPlayers.map(([name, score], index) => (
        <View key={name} style={styles.playerRow}>
          <Text style={styles.playerName}>
            {index + 1}. {name}
          </Text>
          <Text style={styles.playerScore}>{score} pts</Text>
        </View>
      ))}
    </View>
  );
};

export default WinColorGuessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7985e9',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  winnerText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  leaderboardTitle: {
    fontSize: 24,
    color: '#5df9f6',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: '#f2f2f2',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  playerName: {
    fontSize: 18,
    color: '#000',
  },
  playerScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
