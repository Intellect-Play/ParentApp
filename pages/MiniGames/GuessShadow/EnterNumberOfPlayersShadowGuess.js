import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ColorGuessButton from '../../../components/miniGames/ColorGuess/ColorGuessButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setNumberOfPlayers} from '../../../src/redux/games/shadowGuess/shadowGuessSlice';

const EnterNumberOfPlayersShadowGuess = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selected = useSelector(state => state.shadowGuess.numberOfPlayers);

  const options = [1, 2, 3, 4, 5];

  const handleSelect = value => {
    dispatch(setNumberOfPlayers(value));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.pageTitleHeading}>Enter{'\n'}the number of</Text>
        <Text style={styles.pageTitleHeading2}>Players</Text>

        <View style={styles.optionContainer}>
          {options.map((num, index) => {
            const distance = Math.abs(index - (selected - 1));
            const maxWidth = 300;
            const minWidth = 160;
            const width = Math.max(minWidth, maxWidth - distance * 40);
            const isSelected = num === selected;

            return (
              <View key={num} style={styles.centeredDiv}>
                <TouchableOpacity
                  style={[
                    styles.item,
                    {
                      width,
                      opacity: isSelected ? 1 : 0.5,
                      backgroundColor: isSelected ? '#7985e9' : '#B3B9F0',
                      transform: [{scale: isSelected ? 1.1 : 1}],
                    },
                  ]}
                  onPress={() => handleSelect(num)}
                  activeOpacity={0.8}>
                  <Text
                    style={[
                      styles.itemText,
                      isSelected && styles.selectedText,
                    ]}>
                    {num}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
          <View style={styles.buttonContainer}>
            <ColorGuessButton
              title="Next"
              width={350}
              height={60}
              backgroundColor="#7985e9"
              textColor="#fff"
              borderRadius={20}
              onPress={() => navigation.navigate('PlayerShadowGuessNames')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterNumberOfPlayersShadowGuess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7eb7c',
    alignItems: 'center',
    paddingTop: 80,
  },
  optionContainer: {
    marginTop: 40,
    gap: 10,
  },
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 30,
  },
  item: {
    height: 70,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 22,
    color: '#333',
    fontWeight: '600',
  },
  selectedText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  pageTitleHeading: {
    fontWeight: 'medium',
    color: '#ffff',
    fontSize: 34,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  pageTitleHeading2: {
    color: '#ffff',
    fontSize: 64,
    fontFamily: 'LuckiestGuy-Regular',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
