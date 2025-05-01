import {configureStore} from '@reduxjs/toolkit';
import colorGuessReducer from './games/colorGuess';
import emojiGuessReducer from './games/emojiGuess';
import topicGuessReducer from './games/topicGuess';
import shadowGuessReducer from './games/shadowGuess';
import charadeGuessReducer from './games/charadeGuess';

const store = configureStore({
  reducer: {
    colorGuess: colorGuessReducer,
    emojiGuess: emojiGuessReducer,
    topicGuess: topicGuessReducer,
    shadowGuess: shadowGuessReducer,
    charadeGuess: charadeGuessReducer,
  },
});

export default store;
