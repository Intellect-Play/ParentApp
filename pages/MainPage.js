import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AiChatPage from './AiChatPages/AiChatPage';
import HomePage from './HomePage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faRobot} from '@fortawesome/free-solid-svg-icons';
import AiStack from './AiChatPages/AiStack';
const Tab = createBottomTabNavigator();

const MainPage = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
          tabBarLabel: 'Home', // Opsiyonel: Label'ı özelleştirme
        }}
      />
      <Tab.Screen
        name="Ai"
        component={AiStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faRobot} color={color} size={size} />
          ),
          tabBarLabel: 'Ai',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainPage;
