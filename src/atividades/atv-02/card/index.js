import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function cardRevAtv({titulo, descricao, preco, img}) {
    return(
        <View style={styles.container}>
            <View>
             <Image source={img} style={styles.imagem} /> 
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.preco}>{preco}</Text>
            </View>
        </View>
    );
}

export default cardRevAtv;

