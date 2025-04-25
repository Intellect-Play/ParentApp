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
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faMugEmpty} from '@fortawesome/free-solid-svg-icons/faMugEmpty';

library.add(fab, faSquareCheck, faMugSaucer);
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
