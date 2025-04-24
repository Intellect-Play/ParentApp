import {StyleSheet, Text, View} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/Buttons/Button';
import SocialNetworkComponent from '../components/SocialNetworks/SocialNetworksComponent';
import PoliciesComponent from '../components/Policies/PoliciesComponent';
import {useNavigation} from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPageContainer}>
      <View style={styles.margin}>
        <CustomInput
          label="Email"
          placeholder="email@example.com"
          keyboardType="email-address"
        />

        <CustomInput
          label="Password"
          placeholder="Type your password..."
          isPassword={true}
        />
      </View>
      <Text style={[styles.marginForgot, styles.textColor]}>
        Forgot password?
      </Text>
      <View style={styles.buttonSection}>
        <Button text="Log in" />
      </View>

      <View style={styles.loginSection}>
        <Text style={styles.loginSectionColor}>
          Do not have a Galactic ID?{' '}
        </Text>
        <Text
          style={styles.loginBtn}
          onPress={() => navigation.navigate('RegisterPage')}>
          Register
        </Text>
        <Text onPress={() => navigation.replace('MainPage')}>Main Page</Text>
      </View>
      <View style={styles.centeredDiv}>
        <Text style={styles.textOr}>OR</Text>
      </View>
      <View style={styles.socialMargin}>
        <SocialNetworkComponent />
      </View>
      <View style={styles.footer}>
        <PoliciesComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  margin: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  marginForgot: {
    marginLeft: 10,
  },
  textColor: {
    color: '#4e576a',
    fontFamily: 'POPPINS',
  },
  buttonSection: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOr: {
    color: '#6b6b6b',
    fontFamily: 'POPPINS',
    marginTop: 10,
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
  socialMargin: {
    marginTop: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    padding: 16,
  },
});

export default LoginPage;
