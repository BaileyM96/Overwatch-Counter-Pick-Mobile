import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header/Header';
import Cards from './src/Components/Card/Cards';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Cards />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
    fontFamily: 'LuckiestGuy-Regular'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
