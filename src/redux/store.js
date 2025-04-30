import {configureStore} from '@reduxjs/toolkit';
import colorGuessReducer from './games/colorGuess';
import emojiGuessReducer from './games/emojiGuess';
import topicGuessReducer from './games/topicGuess';

const store = configureStore({
  reducer: {
    colorGuess: colorGuessReducer,
    emojiGuess: emojiGuessReducer,
    topicGuess: topicGuessReducer,
  },
});

export default store;
