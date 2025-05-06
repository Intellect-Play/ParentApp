import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MiniGamePhoto from '../components/HomePage/miniGamePhoto';
import {homeGames} from '../mockdb/mockdb';
// Luckiest guys

const ITEM_SIZE = 160;
const GAP = 10;

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <FlatList
        data={homeGames}
        keyExtractor={(_, i) => i.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <MiniGamePhoto
              image={item.image}
              title={item.title}
              width={ITEM_SIZE}
              height={ITEM_SIZE}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  flatListContainer: {
    marginTop: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },

  row: {
    justifyContent: 'space-evenly',
    marginBottom: GAP,
  },
});
