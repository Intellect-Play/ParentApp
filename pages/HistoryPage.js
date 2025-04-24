import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {mockData} from '../mockdb/mockdb';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMessage, faClock} from '@fortawesome/free-solid-svg-icons';
import {truncateText} from '../utils/TruncateText';
const HistoryPage = () => {
  // Mesajları [soru, cevap] çiftleri halinde grupla
  const groupedMessages = [];
  for (let i = 0; i < mockData.data.length; i += 2) {
    if (i + 1 < mockData.data.length) {
      groupedMessages.push({
        question: mockData.data[i],
        answer: mockData.data[i + 1],
      });
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Today Header */}
        <View style={styles.dateHeader}>
          <Text style={styles.dateHeaderText}>Today</Text>
          <View style={styles.underline} />
        </View>

        {/* Gruplanmış Mesajlar */}
        {groupedMessages.map((pair, index) => (
          <View key={index} style={styles.messagePairContainer}>
            {/* Yorum Emojisi - SOLDA */}
            <View style={styles.commentIconCircle}>
              <FontAwesomeIcon icon={faMessage} size={20} color="#666" />
            </View>

            {/* Soru-Cevap Çifti - SAĞDA */}
            <View style={styles.messagesColumn}>
              {/* User Sorusu */}
              <View
                style={[styles.messageContainer, styles.userMessageContainer]}>
                <Text style={[styles.messageText, styles.userMessageColor]}>
                  {pair.question.text}
                </Text>
              </View>

              {/* AI Cevabı */}
              <View
                style={[styles.messageContainer, styles.aiMessageContainer]}>
                <Text style={styles.messageText}>
                  {truncateText(pair.answer.text, 33)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 16,
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginRight: 10,
  },
  underline: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  messagePairContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 15,
  },
  commentIcon: {
    marginRight: 10,
    paddingTop: 8,
  },
  messagesColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  messageContainer: {
    padding: 5,
    borderRadius: 16,
  },
  userMessageContainer: {
    borderBottomRightRadius: 4,
  },
  userMessageColor: {
    fontWeight: 'bold',
    fontFamily: 'POPPINS',
  },
  aiMessageContainer: {
    borderBottomRightRadius: 4,
    fontFamily: 'POPPINS',
  },
  messageText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'POPPINS',
  },
  commentIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 30, // Tam yuvarlak yapar
    backgroundColor: '#f0f0f0', // Açık gri arkaplan
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default HistoryPage;
