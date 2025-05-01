import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  playerNames: [],
  activePlayers: [],
  eliminatedPlayers: [],
  currentPlayerIndex: 0,
  sticks: [],
  maxDrawsPerTurn: 3,
  currentDraws: 0,
  gameEnded: false,
  loser: null,
  winner: null,
};

const stickDrawSlice = createSlice({
  name: 'stickDraw',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.playerNames = action.payload;
      state.activePlayers = [...action.payload];
      state.eliminatedPlayers = [];
      state.currentPlayerIndex = 0;
      state.sticks = [];
      state.currentDraws = 0;
      state.gameEnded = false;
      state.loser = null;
      state.winner = null;
    },
    setSticks: (state, action) => {
      state.sticks = Array(action.payload).fill(true); // true = stick not drawn yet
    },
    drawStick: state => {
      if (state.gameEnded) return;
      const availableIndices = state.sticks
        .map((val, idx) => (val ? idx : -1))
        .filter(idx => idx !== -1);
      if (availableIndices.length === 0) return;

      const randomIndex =
        availableIndices[Math.floor(Math.random() * availableIndices.length)];
      state.sticks[randomIndex] = false;
      state.currentDraws++;

      if (availableIndices.length === 1) {
        const eliminated = state.activePlayers[state.currentPlayerIndex];
        state.eliminatedPlayers.push(eliminated);
        state.activePlayers.splice(state.currentPlayerIndex, 1);
        state.currentDraws = 0;
        state.sticks = [];

        if (state.activePlayers.length === 1) {
          state.gameEnded = true;
          state.winner = state.activePlayers[0];
        } else {
          if (state.currentPlayerIndex >= state.activePlayers.length) {
            state.currentPlayerIndex = 0;
          }
        }
      } else if (state.currentDraws >= state.maxDrawsPerTurn) {
        state.currentDraws = 0;
        state.currentPlayerIndex =
          (state.currentPlayerIndex + 1) % state.activePlayers.length;
      }
    },
    nextPlayer: state => {
      state.currentDraws = 0;
      state.currentPlayerIndex =
        (state.currentPlayerIndex + 1) % state.activePlayers.length;
    },
    resetGame: () => initialState,
  },
});

export const {setPlayers, setSticks, drawStick, nextPlayer, resetGame} =
  stickDrawSlice.actions;

export default stickDrawSlice.reducer;
