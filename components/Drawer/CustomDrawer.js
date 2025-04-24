// CustomDrawer.tsx

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import UserProfileContainer from '../User/UserProfileContainer';

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
      <UserProfileContainer />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
