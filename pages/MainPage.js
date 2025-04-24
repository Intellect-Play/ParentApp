import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AiChatPage from './AiChatPages/AiChatPage';
import HomePage from './HomePage';

const Tab = createBottomTabNavigator();

const MainPage = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Ai" component={AiChatPage} />
    </Tab.Navigator>
  );
};

export default MainPage;
