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
        <Text>Farid</Text>
        <Text>faridgalactic@gmail.com</Text>
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
  },
});
