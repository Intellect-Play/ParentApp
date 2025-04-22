import {StyleSheet, Text, View} from 'react-native';

const PoliciesComponent = () => {
  return (
    <View style={styles.policiesSection}>
      <Text style={[styles.policiesTextCenter, styles.policiesTextColor]}>
        Signing up implies that you have read and agreed to Galactic's{' '}
        <Text style={styles.loginBtn}>License Policy</Text> and{' '}
        <Text style={styles.loginBtn}>Privacy Policy.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  policiesSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  policiesTextCenter: {
    textAlign: 'center',
  },
  policiesTextColor: {
    color: '#6b6b6b',
    fontSize: 12,
  },
  loginBtn: {
    color: 'rgba(74, 95, 255, 1)',
    fontFamily: 'Poppins',
  },
});

export default PoliciesComponent;
