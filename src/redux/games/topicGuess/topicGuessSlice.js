import {createSlice} from '@reduxjs/toolkit';
import {
  EASY_MODE,
  MEDIUM_MODE,
  HARD_MODE,
} from '../../../../gameSettings/TopicGuess/settings';

const initialState = {
  numberOfPlayers: 3,
  playerNames: [],
  difficulty: 'easy',
  timePerRound: EASY_MODE,
  currentRound: 1,
  scores: {},
  answeredPlayers: [],
  currentPlayerIndex: 0,
  gameStarted: false,
  gameEnded: false,
};

const topicGuessSlice = createSlice({
  name: 'topicGuess',
  initialState,
  reducers: {
    setNumberOfPlayers: (state, action) => {
      state.numberOfPlayers = action.payload;
    },
    setPlayerNames: (state, action) => {
      const uniqueNames = [];
      const nameCounts = {};

      action.payload.forEach(name => {
        const trimmed = name.trim();

        if (trimmed === '') {
          uniqueNames.push('');
          return;
        }

        // Aratırken yalnızca orijinal adı baz al
        const baseName = trimmed.replace(/\s\(\d+\)$/, '');

        nameCounts[baseName] = (nameCounts[baseName] || 0) + 1;

        if (nameCounts[baseName] === 1) {
          uniqueNames.push(baseName);
        } else {
          uniqueNames.push(`${baseName} (${nameCounts[baseName]})`);
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
      if (state.numberOfPlayers === 1) {
        state.currentRound += 1;
      } else {
        state.currentPlayerIndex =
          (state.currentPlayerIndex + 1) % state.numberOfPlayers;
      }
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
    addAnsweredPlayer: (state, action) => {
      if (!state.answeredPlayers.includes(action.payload)) {
        state.answeredPlayers.push(action.payload);
      }
    },
    resetAnsweredPlayers: state => {
      state.answeredPlayers = [];
    },
  },
});

export const {
  setNumberOfPlayers,
  setPlayerNames,
  setDifficulty,
  incrementScore,
  nextPlayer,
  startGame,
  endGame,
  resetGame,
  addAnsweredPlayer,
  resetAnsweredPlayers,
} = topicGuessSlice.actions;

export default topicGuessSlice.reducer;
