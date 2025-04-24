// AiChatPage.tsx
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import CustomDrawer from '../../components/Drawer/CustomDrawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faClock} from '@fortawesome/free-solid-svg-icons';
const Drawer = createDrawerNavigator();

const ChatScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>AI Chat içerik burda</Text>
  </View>
);

const SidebarScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Sidebar örneği</Text>
  </View>
);

const AiChatPage = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: 'GalacticAi',
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
          drawerLabel: 'Chat',
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
          },
          drawerLabelStyle: {
            color: '#212120',
            marginLeft: -15,
          },
          title: 'Chat',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
        name="Chat"
        component={ChatScreen}
      />
      {/* <Drawer.Screen name="Menu" component={SidebarScreen} /> */}
    </Drawer.Navigator>
  );
};

export default AiChatPage;
