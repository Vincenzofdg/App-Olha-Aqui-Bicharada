import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

import images from '../localized/images';

const {width, height} = Dimensions.get('window');

function Footer({name}) {
  return (
    <View style={styles.container}>
      <View style={{ height: '100%', width: 200}} />
      <Image source={images.logo} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height * 0.14,
  },
  logo: {
    width: 110,
    height: '100%',
  }
})

export default Footer;