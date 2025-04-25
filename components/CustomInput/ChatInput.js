import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {faMicrophone, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const ChatInput = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inputAndMicContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ask me anything..."
            placeholderTextColor="#999"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('AiVoicePage')}
            style={styles.micButton}>
            <FontAwesomeIcon icon={faMicrophone} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.sendButtonContainer}>
        <LinearGradient
          colors={['#6a11cb', '#2575fc']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradientButton}>
          <FontAwesomeIcon icon={faPaperPlane} size={20} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  inputAndMicContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  micButton: {
    marginLeft: 10,
    padding: 8,
  },
  sendButtonContainer: {
    width: 50,
    height: 50,
  },
  gradientButton: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatInput;
