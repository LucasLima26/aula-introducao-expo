import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evely',
        borderWidth: RFPercentage(0.5),
        borderColor: 'darkslategrey',
        padding: RFPercentage(1.5),
        borderRadius: RFPercentage(1.5),
        width: '90%',
        alignItems: 'center',
        marginBottom: RFPercentage(1),
    },
    titulo: {
        fontSize: RFPercentage(3.5),
        fontWeight: 'bold',
        color: 'darkslategrey',
    },
    descricao: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: '#222',
    },
    preco: {
        fontSize: RFPercentage(3.5),
        color: '#222',
        fontWeight: 'bold',
    },
    imagem: {
        height: RFPercentage(16),
        width: RFPercentage(10),
        //width: '90%', 
        resizeMode: 'contain',
        // filter: 'grayscale(80%)', 
        // filter: 'sepia(80%)', 
        // filter: 'saturate(10%)', 
        //filter: 'brightness(30%)', 
        // filter: 'contrast(50%)', 
        // filter: 'invert(100%)', 
    },
    
});

export default styles;