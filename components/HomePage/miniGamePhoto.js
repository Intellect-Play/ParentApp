import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const MiniGamePhoto = ({title, image, width = 150, height = 150}) => {
  return (
    <ImageBackground
      source={image}
      style={[styles.container, {width, height}]}
      imageStyle={styles.image}>
      {title && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150, // kare olsun
    height: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)', // saydam siyah
    padding: 5,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MiniGamePhoto;
