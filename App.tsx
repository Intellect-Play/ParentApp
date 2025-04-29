import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import MainPage from './pages/MainPage';
import AiVoicePage from './pages/AiChatPages/AiVoicePage';
import GuessColorPage from './pages/MiniGames/GuessColor/GuessColorPage';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import EnterNumberOfPlayersColorGuess from './pages/MiniGames/GuessColor/EnterNumberOfPlayersColorGuess';
import PlayerNames from './pages/MiniGames/GuessColor/PlayerNames';
import DifficultyPage from './pages/MiniGames/GuessColor/DifficultyPage';
import GuessWordsPage from './pages/MiniGames/GuessColor/GuessWordsPage';
import WinColorGuessPage from './pages/MiniGames/GuessColor/WinColorGuessPage';
import GuessEmojiPage from './pages/MiniGames/GuessEmoji/GuessEmojiPage';
import EnterNumberOfPlayersEmojiGuess from './pages/MiniGames/GuessEmoji/EnterNumberOfPlayersEmojiGuess';
import PlayerEmojiNames from './pages/MiniGames/GuessEmoji/PlayerNames';
import DifficultyEmojiGuessPage from './pages/MiniGames/GuessEmoji/DifficultyEmojiGuessPage';
import EmojiGuessWordsPage from './pages/MiniGames/GuessEmoji/EmojiGuessWordsPage';
import WinEmojiGuessPage from './pages/MiniGames/GuessEmoji/WinEmojiGuessPage';

// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faMugEmpty} from '@fortawesome/free-solid-svg-icons/faMugEmpty';

library.add(fab, faSquareCheck, faMugSaucer);
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="WelcomePage">
            <Stack.Screen
              name="WelcomePage"
              component={WelcomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{
                title: 'Log In',
                headerTitleAlign: 'center',
                headerTintColor: '#2260ff',
                headerTitleStyle: {
                  fontFamily: 'POPPINS',
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="RegisterPage"
              component={RegisterPage}
              options={{
                title: 'New Account',
                headerTitleAlign: 'center',
                headerTintColor: '#2260ff',
                headerTitleStyle: {
                  fontFamily: 'POPPINS',
                  fontWeight: 'bold',
                },
              }}
            />

            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordPage}
              options={{
                title: 'Reset Password',
                headerTitleAlign: 'center',
                headerTintColor: '#2260ff',
                headerTitleStyle: {
                  fontFamily: 'POPPINS',
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="AiChatPageWithDrawer"
              component={MainPage}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="AiVoicePage"
              component={AiVoicePage}
              options={{
                title: 'Voice AI',
                headerTitleAlign: 'center',
                headerTintColor: '#2260ff',
                headerTitleStyle: {
                  fontFamily: 'POPPINS',
                  fontWeight: 'bold',
                  color: 'black',
                },
                presentation: 'modal',
              }}
            />

            {/*-------------------------------- GUESS COLOR GAME ---------------------------------------*/}
            <Stack.Screen
              name="GuessColorPage"
              component={GuessColorPage}
              options={{
                title: '',

                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="EnterNumberOfPlayersColorGuess"
              component={EnterNumberOfPlayersColorGuess}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="PlayerColorGuessNames"
              component={PlayerNames}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="DifficultyColorGuessPage"
              component={DifficultyPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="GuessWordsPage"
              component={GuessWordsPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="WinColorGuessPage"
              component={WinColorGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            {/* ---------------------------GUESS EMOJI GAME----------------------------- */}

            <Stack.Screen
              name="GuessEmojiPage"
              component={GuessEmojiPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="EnterNumberOfPlayersEmojiGuess"
              component={EnterNumberOfPlayersEmojiGuess}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="PlayerEmojiGuessNames"
              component={PlayerEmojiNames}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="DifficultyEmojiGuessPage"
              component={DifficultyEmojiGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="EmojiGuessWordsPage"
              component={EmojiGuessWordsPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="WinEmojiGuessPage"
              component={WinEmojiGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
