import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import img from '../../../assets/002-1-react-native.png'; 

import Mensagem from './mensagens';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade02</Text>
            <Image source={img} style={styles.imagem} /> 

            <Mensagem titulo={'Camiseta Branca e Preta'}>
                Camisa com listras largas, modelo 2024
            </Mensagem>
            <Mensagem titulo={'Camisa Preta'}>
                OCamisa Preta sem listras, modelo 2024
            </Mensagem>
            <Mensagem titulo={'Camisa Listrada'}>
                Camisa com Listrras, modelo classico.
            </Mensagem>
             <Mensagem titulo={'Camisa São Jorge'}>
                Camisa modelo 2012.
            </Mensagem>
        </View>
    );
}

export default Atividade02;