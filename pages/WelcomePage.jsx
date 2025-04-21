import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Buttons/Button';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/welcome_final_secuence_00012.jpg')}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={[styles.textColor, styles.textSection]}>
          Welcome!
          {'\n'}
          Get ready to make learning!
          {'\n'}
          fun for your child!
        </Text>
      </View>
      <View style={styles.gaps}>
        <Button text="Create an account!" />
      </View>
      <View style={styles.loginSection}>
        <Text style={styles.loginSectionColor}>
          Already have a Galactic ID?{' '}
        </Text>
        <Text style={styles.loginBtn}>Log in.</Text>
      </View>
      <View style={styles.generalNetworkContainer}>
        <Text style={styles.textOr}>OR</Text>
        <View style={styles.icons}>
          <View>
            <Image
              source={require('../assets/images/socialNetworks/google.png')}
            />
          </View>

          <View>
            <Image
              source={require('../assets/images/socialNetworks/apple.png')}
            />
          </View>

          <View>
            <Image
              source={require('../assets/images/socialNetworks/facebook.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
    fontFamily: 'Poppins',
  },
  imgContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  image: {
    width: 400,
    height: 400,
  },
  textSection: {
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  wrapper: {
    flex: 1,
  },
  textColor: {
    color: '#6b6b6b',
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'Poppins',
  },
  gaps: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginSection: {
    display: 'flex',
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    fontFamily: 'Poppins',
  },
  loginSectionColor: {
    color: '#6b6b6b',
  },
  loginBtn: {
    color: 'rgba(74, 95, 255, 1)',
    fontFamily: 'Poppins',
  },
  icons: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
  },
  generalNetworkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOr: {
    marginBottom: 70,
  },
});
