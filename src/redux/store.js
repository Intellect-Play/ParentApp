import {configureStore} from '@reduxjs/toolkit';
import colorGuessReducer from './games/colorGuess';
import emojiGuessReducer from './games/emojiGuess';

const store = configureStore({
  reducer: {
    colorGuess: colorGuessReducer,
    emojiGuess: emojiGuessReducer,
  },
});

export default store;
