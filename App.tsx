import React from 'react';
// import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
