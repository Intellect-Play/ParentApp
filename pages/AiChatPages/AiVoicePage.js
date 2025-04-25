import {StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMicrophone} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
const AiVoicePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.shadow, styles.leftShadow]} />

        <View style={[styles.shadow, styles.rightShadow]} />

        <View style={[styles.shadow, styles.bottomShadow]} />
        <LinearGradient
          colors={['#376deb', '#2951e6']}
          style={styles.circleMic}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <LinearGradient
            style={styles.circleMicSec}
            colors={['#7395fd', '#2352e8']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <FontAwesomeIcon size={30} icon={faMicrophone} color="white" />
          </LinearGradient>
        </LinearGradient>
      </View>
      <View style={styles.secondMicMargin}>
        <View style={styles.secondMicParentBorder}>
          <View style={styles.secondMicSecondBorder}>
            <View style={styles.secondMicCircle}>
              <FontAwesomeIcon size={25} icon={faMicrophone} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AiVoicePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circleMic: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 130,
    backgroundColor: '#2a52e6',
    borderRadius: 100,
    padding: 10,
  },
  circleMicSec: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    padding: 5,
  },
  micSizeTop: {
    fontSize: 100,
  },
  shadow: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 100,
    opacity: 0.7,
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 80,
    filter: 'blur(2px)',
  },
  leftShadow: {
    backgroundColor: '#a976e1',
    left: -10,
    top: -11,
  },
  rightShadow: {
    backgroundColor: '#5054c1',
    right: -12,
    top: 0,
  },
  bottomShadow: {
    backgroundColor: '#93d9e2',
    bottom: -12,
    left: -6,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  secondMicMargin: {
    marginTop: 100,
  },

  secondMicCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#c7d6fd',
  },

  secondMicParentBorder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#c8d7ff',
  },

  secondMicSecondBorder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 120,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#90afff',
  },
});
