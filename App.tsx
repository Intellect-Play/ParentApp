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
import GuessTopicPage from './pages/MiniGames/GuessTopic/GuessTopicPage';
import EnterNumberOfPlayersTopicGuess from './pages/MiniGames/GuessTopic/EnterNumberOfPlayersTopicGuess';
import PlayerTopicNames from './pages/MiniGames/GuessTopic/PlayerNames';
import DifficultyTopicGuessPage from './pages/MiniGames/GuessTopic/DifficultyTopicGuessPage';
import TopicGuessCategoriesPage from './pages/MiniGames/GuessTopic/TopicGuessCategoriesPage';
import WinTopicGuessPage from './pages/MiniGames/GuessTopic/WinTopicGuessPage';
import GuessShadowPage from './pages/MiniGames/GuessShadow/GuessShadow';
import EnterNumberOfPlayersShadowGuess from './pages/MiniGames/GuessShadow/EnterNumberOfPlayersShadowGuess';
import PlayerShadowNames from './pages/MiniGames/GuessShadow/PlayerNames';
import DifficultyShadowGuessPage from './pages/MiniGames/GuessShadow/DifficultyShadowGuessPage';
import ShadowGuessAnimalsPage from './pages/MiniGames/GuessShadow/ShadowGuessAnimalsPage';
import WinShadowGuessPage from './pages/MiniGames/GuessShadow/WinShadowGuessPage';
import GuessCharadePage from './pages/MiniGames/GuessCharade/GuessCharadePage';
import EnterNumberOfPlayersCharadeGuess from './pages/MiniGames/GuessCharade/EnterNumberOfPlayersCharadeGuess';
import PlayerCharadeGuessNames from './pages/MiniGames/GuessCharade/PlayerNames';
import DifficultyCharadeGuessPage from './pages/MiniGames/GuessCharade/DifficultyCharadeGuessPage';
import CharadeGuessWordsPage from './pages/MiniGames/GuessCharade/CharadeGuessWordsPage';
import WinCharadeGuessPage from './pages/MiniGames/GuessCharade/WinCharadeGuessPage';
import GuessFlagPage from './pages/MiniGames/GuessFlag/GuessFlagPage';
import EnterNumberOfPlayersFlagGuess from './pages/MiniGames/GuessFlag/EnterNumberOfPlayersFlagGuess';
import PlayerFlagNames from './pages/MiniGames/GuessFlag/PlayerNames';
import DifficultyFlagGuessPage from './pages/MiniGames/GuessFlag/DifficultyFlagGuessPage';
import FlagGuessWordsPage from './pages/MiniGames/GuessFlag/FlagGuessWordsPage';
import WinFlagGuessPage from './pages/MiniGames/GuessFlag/WinFlagGuessPage';

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

            {/* ------------------------------- GUESS TOPIC GAME --------------------- */}

            <Stack.Screen
              name="GuessTopicPage"
              component={GuessTopicPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="EnterNumberOfPlayersTopicGuess"
              component={EnterNumberOfPlayersTopicGuess}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="PlayerTopicGuessNames"
              component={PlayerTopicNames}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="DifficultyTopicGuessPage"
              component={DifficultyTopicGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="TopicGuessCategoriesPage"
              component={TopicGuessCategoriesPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="WinTopicGuessPage"
              component={WinTopicGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            {/* ---------------------------------------------- GUESS SHADOW GAME ---------------------- */}
            <Stack.Screen
              name="GuessShadowPage"
              component={GuessShadowPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="EnterNumberOfPlayersShadowGuess"
              component={EnterNumberOfPlayersShadowGuess}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="PlayerShadowGuessNames"
              component={PlayerShadowNames}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="DifficultyShadowGuessPage"
              component={DifficultyShadowGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="ShadowGuessAnimalsPage"
              component={ShadowGuessAnimalsPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="WinShadowGuessPage"
              component={WinShadowGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            {/* --------------------------- GUESS CHARADE GAME --------------------------------- */}
            <Stack.Screen
              name="GuessCharadePage"
              component={GuessCharadePage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="EnterNumberOfPlayersCharadeGuess"
              component={EnterNumberOfPlayersCharadeGuess}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="PlayerCharadeGuessNames"
              component={PlayerCharadeGuessNames}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="DifficultyCharadeGuessPage"
              component={DifficultyCharadeGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="CharadeGuessWordsPage"
              component={CharadeGuessWordsPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="WinCharadeGuessPage"
              component={WinCharadeGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            {/*----------------------------------------------- GUESS FLAG GAME ---------------------------  */}

            <Stack.Screen
              name="GuessFlagPage"
              component={GuessFlagPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="EnterNumberOfPlayersFlagGuess"
              component={EnterNumberOfPlayersFlagGuess}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="PlayerFlagGuessNames"
              component={PlayerFlagNames}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="DifficultyFlagGuessPage"
              component={DifficultyFlagGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name="FlagGuessWordsPage"
              component={FlagGuessWordsPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
                animation: 'none',
              }}
            />

            <Stack.Screen
              name="WinFlagGuessPage"
              component={WinFlagGuessPage}
              options={{
                title: '',
                headerShown: false,
                presentation: 'modal',
                animation: 'none',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
