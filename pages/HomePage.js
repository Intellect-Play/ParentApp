import {useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import MiniGamePhoto from '../components/HomePage/miniGamePhoto';
import {homeGames} from '../mockdb/mockdb';
// Luckiest guys

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {homeGames.map((game, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(game.screen)}>
            <MiniGamePhoto
              image={game.image}
              title={game?.title}
              width={160}
              height={160}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
});
