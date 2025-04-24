import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AiChatPage from './AiChatPages/AiChatPage';
import WelcomePage from './WelcomePage';

const Tab = createBottomTabNavigator();

const MainPage = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={WelcomePage} />
      <Tab.Screen name="Ai" component={AiChatPage} />
    </Tab.Navigator>
  );
};

export default MainPage;
