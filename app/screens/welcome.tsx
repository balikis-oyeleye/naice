import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

export default function Welcome() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.logoText}>Sell WHat you Don't Need</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    color: colors.white,
  },
  loginBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
});
