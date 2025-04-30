import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

// Luckiest guys

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>COMING SOON...</Text>

      <Text onPress={() => navigation.navigate('GuessColorPage')}>
        Color guess
      </Text>

      <Text onPress={() => navigation.navigate('GuessEmojiPage')}>
        Emoji guess
      </Text>

      <Text onPress={() => navigation.navigate('GuessTopicPage')}>
        Topic guess
      </Text>

      <Text onPress={() => navigation.navigate('GuessShadowPage')}>
        Shadow guess
      </Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
