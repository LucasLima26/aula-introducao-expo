import { View, Text } from 'react-native';

import styles from './styles';

function Exemplo01 () {
    return(
        <View  style ={styles.container} >
            <Text style={styles.titulo} >Exemplo 1</Text>
            <Text style={styles.texto}>
                Aula de React do Native com Expo {"\n"} {"\n"}
            </Text>
             <Text style={styles.texto}>
                React Native é um framework de código aberto criado pela Meta (Facebook) em 2015, que permite desenvolver aplicativos móveis nativos para Android e iOS usando JavaScript e React. 
                Ele permite criar apps verdadeiramente nativos—não apenas webviews—com uma única base de código, oferecendo alta performance e interface fluida
            </Text>
        </View>
    );
}


export default Exemplo01;