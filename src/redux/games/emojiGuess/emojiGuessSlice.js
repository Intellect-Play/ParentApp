import {createSlice} from '@reduxjs/toolkit';
import {
  EASY_MODE,
  MEDIUM_MODE,
  HARD_MODE,
} from '../../../../gameSettings/EmojiGuess/settings';

const initialState = {
  numberOfPlayers: 3,
  playerNames: [],
  difficulty: 'easy',
  timePerRound: 10,
  currentRound: 1,
  scores: {},
  currentPlayerIndex: 0,
  gameStarted: false,
  gameEnded: false,

  emojis: [
    {emojis: ['🦶', '⚽'], answer: 'football'},
    {emojis: ['🚗', '💨'], answer: 'fast car'},
    {emojis: ['🌧️', '☂️'], answer: 'rainy day'},
    {emojis: ['🍎', '📱'], answer: 'apple phone'},
  ],
  currentEmojiIndex: 0,
  showAnswer: false,
};

const emojiGuessSlice = createSlice({
  name: 'emojiGuess',
  initialState,
  reducers: {
    setNumberOfPlayers: (state, action) => {
      state.numberOfPlayers = action.payload;
    },
    setPlayerNames: (state, action) => {
      const uniqueNames = [];
      const nameCounts = {};

      action.payload.forEach(name => {
        const trimmedName = name.trim();

        if (trimmedName === '') {
          uniqueNames.push('');
          return;
        }

        if (nameCounts[trimmedName]) {
          nameCounts[trimmedName] += 1;
          uniqueNames.push(`${trimmedName} (${nameCounts[trimmedName]})`);
        } else {
          nameCounts[trimmedName] = 1;
          uniqueNames.push(trimmedName);
        }
      });

      state.playerNames = uniqueNames;
      state.scores = Object.fromEntries(uniqueNames.map(name => [name, 0]));
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
      switch (action.payload) {
        case 'easy':
          state.timePerRound = EASY_MODE;
          break;
        case 'medium':
          state.timePerRound = MEDIUM_MODE;
          break;
        case 'hard':
          state.timePerRound = HARD_MODE;
          break;
      }
    },
    incrementScore: (state, action) => {
      state.scores[action.payload]++;
    },
    nextPlayer: state => {
      state.currentPlayerIndex =
        (state.currentPlayerIndex + 1) % state.numberOfPlayers;
      state.showAnswer = false;
      state.currentEmojiIndex =
        (state.currentEmojiIndex + 1) % state.emojis.length;
    },
    showAnswerNow: state => {
      state.showAnswer = true;
    },
    startGame: state => {
      state.gameStarted = true;
      state.gameEnded = false;
      state.currentRound = 1;
    },
    endGame: state => {
      state.gameEnded = true;
    },
    resetGame: () => initialState,
  },
});

export const {
  setNumberOfPlayers,
  setPlayerNames,
  setDifficulty,
  incrementScore,
  nextPlayer,
  showAnswerNow,
  startGame,
  endGame,
  resetGame,
} = emojiGuessSlice.actions;

export default emojiGuessSlice.reducer;
