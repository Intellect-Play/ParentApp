import {Image, StyleSheet, View} from 'react-native';

const SocialNetworkComponent = () => {
  return (
    <View style={styles.generalNetworkContainer}>
      <View style={styles.icons}>
        <View>
          <Image
            source={require('../../assets/images/socialNetworks/google.png')}
          />
        </View>

        <View>
          <Image
            source={require('../../assets/images/socialNetworks/apple.png')}
          />
        </View>

        <View>
          <Image
            source={require('../../assets/images/socialNetworks/facebook.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  generalNetworkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
  },
});

export default SocialNetworkComponent;
