import { View, Text, Image } from 'react-native'; 

import styles from './styles';
import Amarela from '../../../assets/brasilAmarela.png';
import Branco from '../../../assets/brasilBranco.png';
import Azul from '../../../assets/brasilAzul.jpg';
import Preta from '../../../assets/brasilPreta.png';


import Card from './card';

function Atividade02 () {
    return(
        
        <View style={styles.container}>
            <Text style={styles.titulo}>revisao atividade</Text>

            <Card titulo={'Camiseta Amarela'}
               descricao={'camiseta principal da seleção'}
               preco={'R$ 499,00'}
               img={Amarela}
            />
              <Card titulo={'Camiseta Azul'}
               descricao={'camiseta numero 2'}
               preco={'R$ 450,00'}
               img={Azul}
            />

              <Card titulo={'Camiseta Branco'}
               descricao={'camiseta numero 3'}
               preco={'R$ 500,00'}
               img={Branco}
            />
              <Card titulo={'Camiseta Preta'}
               descricao={'camiseta numero 4'}
               preco={'R$ 600,00'}
               img={Preta}
            />
        
        </View>
    );
}

export default Atividade02;