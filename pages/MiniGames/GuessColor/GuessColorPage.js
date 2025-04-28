import {Image, StyleSheet, Text, View} from 'react-native';

const GuessColorPage = () => {
  return (
    <View style={styles.mainScreen}>
      <View style={styles.centeredItems}>
        <View style={[styles.centeredItems, styles.imageContainer]}>
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
  imageContainer: {
    marginTop: 50,
    marginRight: 10,
  },
  image: {
    width: 390,
    height: 520,
    objectFit: 'cover',
  },
});
