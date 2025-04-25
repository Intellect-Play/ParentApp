import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Buttons/Button';
import PoliciesComponent from '../components/Policies/PoliciesComponent';
import SocialNetworkComponent from '../components/SocialNetworks/SocialNetworksComponent';
import {useNavigation} from '@react-navigation/native';

const WelcomePage = () => {
  const navigation = useNavigation();

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
        <Text
          onPress={() => navigation.navigate('LoginPage')}
          style={styles.loginBtn}>
          Log in.
        </Text>
      </View>
      <View style={styles.centeredDiv}>
        <Text style={styles.textOr}>OR</Text>
      </View>
      <View style={styles.marginIcons}>
        <SocialNetworkComponent />
      </View>
      <View style={styles.marginPolicies}>
        <PoliciesComponent />
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  centeredDiv: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOr: {
    paddingBottom: 27,
    color: '#6b6b6b',
    fontFamily: 'POPPINS',
  },
  marginPolicies: {
    marginBottom: 50,
  },
  marginIcons: {
    marginBottom: 90,
  },
});
