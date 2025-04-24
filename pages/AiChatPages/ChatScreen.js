import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {mockData} from '../../mockdb/mockdb';
import ChatInput from '../../components/CustomInput/ChatInput';

const ChatScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}>
        {mockData.data.map(message => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.sender === 'user'
                ? styles.userMessageContainer
                : styles.aiMessageContainer,
            ]}>
            <Text
              style={[
                styles.messageText,
                message.sender === 'user'
                  ? styles.userMessageText
                  : styles.aiMessageText,
              ]}>
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ChatInput />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 10,
    paddingBottom: 70, // Input yüksekliği kadar alt boşluk
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#a0a9f7',
    borderBottomRightRadius: 4,
  },
  aiMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
  },
  userMessageText: {
    color: 'black',
  },
  aiMessageText: {
    color: 'black',
  },
});

export default ChatScreen;
