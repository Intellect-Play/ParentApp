import {StyleSheet, Text, View} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/Buttons/Button';
import {useNavigation} from '@react-navigation/native';
import SocialNetworkComponent from '../components/SocialNetworks/SocialNetworksComponent';
import PoliciesComponent from '../components/Policies/PoliciesComponent';

const RegisterPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerPageContainer}>
      <View style={styles.margin}>
        <CustomInput
          label="Full Name"
          placeholder="Enter your full name"
          keyboardType="name"
        />

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

        <CustomInput
          label="Password confirmation"
          placeholder="Confirm your password..."
          isPassword={true}
        />
      </View>
      <View style={styles.buttonSection}>
        <Button text="Sign Up" />
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
      <View style={styles.socialMargin}>
        <SocialNetworkComponent />
      </View>
      <View style={styles.footer}>
        <PoliciesComponent />
      </View>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  registerPageContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  margin: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonSection: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOr: {
    color: '#6b6b6b',
    fontFamily: 'POPPINS',
  },
  socialMargin: {
    marginTop: 40,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    padding: 16,
  },
});
