import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';
import Exemplo02 from './src/exemplos/ex-02';
import Exmeplo03 from './src/exemplos/ex03';
import Exemplo04 from './src/exemplos/ex04';
import Exemplo05 from './src/exemplos/ex05';
import Exemplo06 from './src/exemplos/ex06';

import Atividade02 from './src/atividades/atv-02';
import Atividade03 from './src/atividades/atv-03';
import Atividade04 from './src/atividades/atv-04';
import Atividade05 from './src/atividades/atv-05';
import Atividade06 from './src/atividades/atv-06'



export default function App() {
  return (

    <View style={styles.container}>
      <Atividade06/>
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
