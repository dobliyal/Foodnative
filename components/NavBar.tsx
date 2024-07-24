import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  screenWidth,
  screenHeight,
} from './size'; 

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.navarrow}
        source={require('../assets/navarrow.png')}
        resizeMode="stretch"
      />
      <Text style={styles.headerText}>Favorites</Text>
      <Image
        style={styles.navprofile}
        source={require('../assets/navprofile.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: widthPixel(10),
  },
  navarrow: {
    width: widthPixel(80),
    height: heightPixel(80),
    marginLeft: widthPixel(6),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    top:8,
  },
  headerText: {
    width: widthPixel(95),
    height: heightPixel(18),
    fontSize: fontPixel(18),
    fontWeight: '400',
    color:'black',
    lineHeight: fontPixel(18),
    textAlign: 'center',
  },
  navprofile: {
    width: widthPixel(80),
    height: heightPixel(80),
    marginRight: widthPixel(6),
  },
});

export default NavBar;
