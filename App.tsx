import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './pages/WelcomePage';
// import LoginPage from './pages/LoginPage'; // Sonra oluşturacağınız sayfa

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
        {/* <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{title: 'Giriş Yap'}} // Login sayfası başlığı
        /> */}
        {/* Diğer sayfalarınızı buraya ekleyebilirsiniz */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
