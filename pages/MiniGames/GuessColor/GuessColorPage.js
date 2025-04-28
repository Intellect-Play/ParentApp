import {Image, StyleSheet, Text, View} from 'react-native';

const GuessColorPage = () => {
  return (
    <View style={styles.mainScreen}>
      <View style={styles.centeredItems}>
        <View style={styles.centeredItems}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/miniGames/ColorGuess/guessByColor.png')}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default GuessColorPage;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#7985e9',
  },
  centeredItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    width: 380,
    height: 500,
    objectFit: 'cover',
  },
});
