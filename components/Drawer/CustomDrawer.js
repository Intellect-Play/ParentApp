// CustomDrawer.tsx

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        overflow: 'hidden',
        backgroundColor: '#ffff',
      }}>
      <View style={styles.header}>
        <Text style={styles.title}>👽 GalacticAi</Text>
      </View>

      <DrawerItemList {...props} />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => console.log('Çıkış yap')}>
          <Text style={styles.logout}>🚪 Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#1e1e2e',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 'auto',
  },
  logout: {
    color: 'red',
    fontWeight: 'bold',
  },
});
