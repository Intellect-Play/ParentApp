import {StyleSheet, Text, View} from 'react-native';

const PlayerNames = () => {
  return (
    <View style={styles.container}>
      <Text>Salam</Text>
    </View>
  );
};

export default PlayerNames;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7985e9',
  },
});
