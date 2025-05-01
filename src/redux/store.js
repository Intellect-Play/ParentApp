import {configureStore} from '@reduxjs/toolkit';
import colorGuessReducer from './games/colorGuess';
import emojiGuessReducer from './games/emojiGuess';
import topicGuessReducer from './games/topicGuess';
import shadowGuessReducer from './games/shadowGuess';
import charadeGuessReducer from './games/charadeGuess';
import flagGuessReducer from './games/flagGuess';
import keyGuessReducer from './games/keyGuess';
import pullStickReducer from './games/pullStick';

const store = configureStore({
  reducer: {
    colorGuess: colorGuessReducer,
    emojiGuess: emojiGuessReducer,
    topicGuess: topicGuessReducer,
    shadowGuess: shadowGuessReducer,
    charadeGuess: charadeGuessReducer,
    flagGuess: flagGuessReducer,
    keyGuess: keyGuessReducer,
    pullStick: pullStickReducer,
  },
});

export default store;
