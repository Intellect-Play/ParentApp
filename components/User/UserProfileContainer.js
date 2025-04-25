import {Image, StyleSheet, Text, View} from 'react-native';

const UserProfileContainer = () => {
  return (
    <View style={styles.userContainer}>
      <View>
        <Image
          source={require('../../assets/images/avatar/avatar_default.png')}
        />
      </View>
      <View>
        <Text style={styles.userName}>Farid</Text>
        <Text style={styles.userMail}>faridgalactic@gmail.com</Text>
      </View>
    </View>
  );
};

export default UserProfileContainer;

const styles = StyleSheet.create({
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    fontFamily: 'POPPINS',
  },
  userName: {
    fontWeight: 'bold',
    fontFamily: 'POPPINS',
  },
  userMail: {
    color: '#747778',
  },
});
