import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import foto from './assets/gilvan.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Gilvan Ferreira da Silva Filho</Text>
      <Image source={foto} style={{ width: 305, height: 305 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
