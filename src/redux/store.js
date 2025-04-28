import {configureStore} from '@reduxjs/toolkit';
import colorGuessReducer from './games/colorGuess';

const store = configureStore({
  reducer: {
    colorGuess: colorGuessReducer,
  },
});

export default store;
