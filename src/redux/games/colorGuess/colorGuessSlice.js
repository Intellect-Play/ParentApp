import {createSlice} from '@reduxjs/toolkit';
import {
  EASY_MODE,
  HARD_MODE,
  MEDIUM_MODE,
} from '../../../../gameSettings/ColorGuess/settings';

const initialState = {
  numberOfPlayers: 0,
  playerNames: [],
  difficulty: 'easy',
  timePerRound: 10,
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
      state.playerNames = action.payload;
      state.scores = Object.fromEntries(action.payload.map(name => [name, 0]));
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
