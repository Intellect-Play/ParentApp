// AiChatPage.tsx

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';

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
      }}>
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen name="Menu" component={SidebarScreen} />
    </Drawer.Navigator>
  );
};

export default AiChatPage;
