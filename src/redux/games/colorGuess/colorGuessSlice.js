import {createSlice} from '@reduxjs/toolkit';
import {
  EASY_MODE,
  HARD_MODE,
  MEDIUM_MODE,
} from '../../../../gameSettings/ColorGuess/settings';

const initialState = {
  numberOfPlayers: 3,
  playerNames: [],
  difficulty: 'easy',
  timePerRound: EASY_MODE,
  currentRound: 1,
  scores: {},
  currentPlayerIndex: 0,
  gameStarted: false,
  gameEnded: false,
};

const colorGuessSlice = createSlice({
  name: 'colorGuess',
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
} = colorGuessSlice.actions;

export default colorGuessSlice.reducer;
