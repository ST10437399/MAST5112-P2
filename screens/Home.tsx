import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
      <Image 
        source={require('../assets/Icons/Welcomepage.png')} 
        style={styles.splashImage} 
        resizeMode="cover" 
      />

      <SafeAreaView />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Image source={require('../assets/Icons/chef-hat.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('FullMenu')}>
          <Image source={require('../assets/Icons/Menu.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
  },
  splashImage: {
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
  },
  navbar: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
