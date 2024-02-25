import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Welcome from './app/screens/welcome';
import ViewImage from './app/screens/view-image';
import AppText from './app/components/app-text';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppText>njn</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
