import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';
import Exemplo02 from './src/exemplos/ex-02';
import Atividade02 from './src/atividades/atv-02';
import Exmeplo03 from './src/exemplos/ex03';
import Atividade03 from './src/atividades/atv-03'
export default function App() {
  return (

    <View style={styles.container}>
      <Atividade03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffc8',
    padding: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
