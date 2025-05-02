import {faCrown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import LuckiestText from '../../../components/miniGames/LuckiestText';
import {resetGame} from '../../../src/redux/games/pullStick/pullStickSlice';

const StickDrawWinPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const winner = useSelector(state => state.stickDraw.winner);
  const eliminated = useSelector(state => state.stickDraw.eliminatedPlayers);
  const fullRanking = [...eliminated, winner].reverse();

  const first = fullRanking[0];
  const second = fullRanking[1];
  const third = fullRanking[2];
  const others = fullRanking.slice(3);

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
              <Text style={styles.avatarName}>{second}</Text>
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
              <Text style={styles.avatarName}>{first}</Text>
              <View style={styles.firstPlayerCircle}>
                <Text>1</Text>
              </View>
              <View style={styles.firstPlayerCrown}>
                <FontAwesomeIcon icon={faCrown} size={30} color="#ecfd5a" />
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
              <Text style={styles.avatarName}>{third}</Text>
              <View style={styles.horizontalPlayerCircle}>
                <Text>3</Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={{marginTop: 40, width: '100%'}}>
        {others.map((name, index) => (
          <View key={name} style={styles.playerRow}>
            <Text style={styles.playerName}>
              {index + 4}. {name}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <ColorGuessButton
          backgroundColor="#ecfd5a"
          width={300}
          title="Next round"
          onPress={() => {
            // dispatch(resetGame());
            navigation.navigate('PlayerStickNames');
          }}
        />

        <ColorGuessButton
          backgroundColor="#ecfd5a"
          width={300}
          title="Finish Game"
          onPress={() => {
            dispatch(resetGame());
            navigation.navigate('PullStickPage');
          }}
        />
      </View>
    </View>
  );
};

export default StickDrawWinPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7cd7eb',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
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
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  playerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  playerName: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  avatarBorder: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#ecfd5a',
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
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ecfd5a',
    backgroundColor: '#ecfd5a',
    height: 22,
    width: 22,
  },
  horizontalPlayerCircle: {
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ecfd5a',
    backgroundColor: '#ecfd5a',
    height: 22,
    width: 22,
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
  buttonContainer: {
    marginTop: 30,
    gap: 15,
  },
});
