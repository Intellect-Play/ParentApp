import {StyleSheet, Text, View} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/Buttons/Button';

const LoginPage = () => {
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
          placeholder="Şifrenizi girin"
          isPassword={true}
        />
      </View>
      <Text style={[styles.marginForgot, styles.textColor]}>
        Forgot password?
      </Text>
      <View style={styles.buttonSection}>
        <Button text="Log in" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPageContainer: {
    backgroundColor: '#fffff',
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
});

export default LoginPage;
