import {Platform, StyleSheet, Text, View} from 'react-native';

export default function AppText({children}: {children: React.ReactNode}) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
