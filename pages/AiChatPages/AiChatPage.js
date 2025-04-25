// AiChatPage.tsx
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../../components/Drawer/CustomDrawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faClock} from '@fortawesome/free-solid-svg-icons';
import ChatScreen from './ChatScreen';
import HistoryPage from '../HistoryPage';

const Drawer = createDrawerNavigator();

const AiChatPage = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: 'GalacticAI',
        headerTitleAlign: 'center',
        drawerStyle: {
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          overflow: 'hidden',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          drawerLabel: 'New Chat',
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon
              icon={faPlus}
              name="chatbubbles"
              size={size}
              color={'black'}
            />
          ),
          drawerItemStyle: {
            backgroundColor: '#ffff',
            marginLeft: 15,
          },
          drawerLabelStyle: {
            color: '#212120',
            marginLeft: -15,
          },
          title: 'New Chat',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
        name="Chat"
        component={ChatScreen}
      />

      <Drawer.Screen
        name="History"
        component={HistoryPage}
        options={{
          drawerLabel: 'History',
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon
              icon={faClock}
              name="chatbubbles"
              size={size}
              color={'black'}
            />
          ),
          drawerItemStyle: {
            backgroundColor: '#ffff',
            marginLeft: 15,
          },
          drawerLabelStyle: {
            color: '#212120',
            marginLeft: -15,
          },
          title: 'History',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default AiChatPage;
