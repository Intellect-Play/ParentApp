import {StyleSheet, View} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/Buttons/Button';

const ResetPasswordPage = () => {
  return (
    <View style={styles.resetPageContainer}>
      <View style={styles.margin}>
        <CustomInput
          label="Email"
          placeholder="email@example.com"
          keyboardType="email-address"
        />

        <View style={styles.marginBtn}>
          <Button text="Next" />
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordPage;

const styles = StyleSheet.create({
  resetPageContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  margin: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  marginBtn: {
    marginTop: 20,
  },
});
