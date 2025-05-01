import {faCrown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import LuckiestText from '../../../components/miniGames/LuckiestText';
import {
  nextPlayer,
  resetGame,
} from '../../../src/redux/games/charadeGuess/charadeGuessSlice';

const WinCharadeGuessPage = ({route}) => {
  const {winner} = route.params;
  const scores = useSelector(state => state.charadeGuess.scores);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const sortedPlayers = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  const others = sortedPlayers.slice(3);
  const first = sortedPlayers[0];
  const second = sortedPlayers[1];
  const third = sortedPlayers[2];

  return (
    <View style={styles.container}>
      <LuckiestText style={styles.leaderboardTitle}>Leaderboard</LuckiestText>

      <View style={styles.topThreeContainer}>
        {second && (
          <View style={[styles.smallAvatarContainer, styles.relative]}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../../../assets/images/avatar/avatar_default.png')}
                style={[styles.avatarOther, styles.avatarBorder]}
              />
              <Text style={styles.avatarName}>{second[0]}</Text>
              <Text style={styles.avatarScore}>{second[1]} pts</Text>
              <View style={styles.horizontalPlayerCircle}>
                <Text>2</Text>
              </View>
            </View>
          </View>
        )}

        {first && (
          <View style={[styles.bigAvatarContainer, styles.relative]}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../../../assets/images/avatar/avatar_default.png')}
                style={[styles.avatarFirst, styles.avatarBorder]}
              />
              <Text style={styles.avatarName}>{first[0]}</Text>
              <Text style={styles.avatarScore}>{first[1]} pts</Text>
              <View style={styles.firstPlayerCircle}>
                <Text>1</Text>
              </View>
              <View style={styles.firstPlayerCrown}>
                <FontAwesomeIcon icon={faCrown} size={30} color="#fdd05b" />
              </View>
            </View>
          </View>
        )}

        {third && (
          <View style={[styles.smallAvatarContainer, styles.relative]}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../../../assets/images/avatar/avatar_default.png')}
                style={[styles.avatarOther, styles.avatarBorder]}
              />
              <Text style={styles.avatarName}>{third[0]}</Text>
              <Text style={styles.avatarScore}>{third[1]} pts</Text>
              <View style={styles.horizontalPlayerCircle}>
                <Text>3</Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={{marginTop: 40, width: '100%'}}>
        {others.map(([name, score], index) => (
          <View key={name} style={styles.playerRow}>
            <Text style={styles.playerName}>
              {index + 4}. {name}
            </Text>
            <Text style={styles.playerScore}>{score} pts</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <ColorGuessButton
          backgroundColor="#fdd05b"
          width={300}
          title="Next Round"
          onPress={() => {
            dispatch(nextPlayer());
            navigation.navigate('PlayerCharadeGuessNames');
          }}
        />
        <ColorGuessButton
          width={300}
          title="Finish Game"
          onPress={() => {
            dispatch(resetGame());
            navigation.navigate('GuessCharadePage');
          }}
        />
      </View>
    </View>
  );
};

export default WinCharadeGuessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#936dfe',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  winnerText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  leaderboardTitle: {
    fontSize: 34,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  topThreeContainer: {
    flexDirection: 'row',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstPlace: {
    // marginBottom: 0,
    transform: [{translateY: 20}],
  },
  otherPlaces: {
    marginBottom: 0,
  },
  avatarImage: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
  },
  avatarFirst: {
    width: 80,
    height: 80,
  },
  avatarOther: {
    width: 80,
    height: 80,
  },
  avatarName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  avatarScore: {
    color: 'black',
    fontSize: 14,
    marginTop: 2,
    textAlign: 'center',
  },
  playerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: '#f2f2f2',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    alignSelf: 'center',
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
  centerPlayer: {
    marginBottom: 0,
  },
  smallAvatarContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 120,
  },
  bigAvatarContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 90,
  },
  avatarBorder: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#fdd05b',
  },
  relative: {
    position: 'relative',
  },
  firstPlayerCrown: {
    position: 'absolute',
    top: -30,
  },
  firstPlayerCircle: {
    position: 'absolute',
    display: 'flex',
    bottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fdd05b',
    backgroundColor: '#fdd05b',
    height: 22,
    width: 22,
  },

  horizontalPlayerCircle: {
    position: 'absolute',
    display: 'flex',
    bottom: 37,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fdd05b',
    backgroundColor: '#fdd05b',
    height: 22,
    width: 22,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    marginTop: 20,
  },
});
