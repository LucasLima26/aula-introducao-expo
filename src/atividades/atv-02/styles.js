import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, // container ocupa 100% da tela
        backgroundColor: '#fafafa', // cor do container
        borderRadius: 10, // borda curvada
        padding: 8, 
        alignItems: 'center', // alinhamento horizontal - flexDirection collumn
    }, 
    titulo: {
        fontSize: RFPercentage(4), // tamanho da fonte
        fontWeight: 'bold', 
        borderWidth: RFPercentage(0.3), // expessura da borda
        marginTop: RFPercentage(2), // margem acima do elemento
        marginBottom: RFPercentage(2), // margem abaixo do elemento
        paddingVertical: RFPercentage(1), // espaço interno
        width: '100%', // largura do objeto
        textAlign: 'center', // alinhamento horizontal do texto no container
        textAlignVertical: 'center', // alinhamento vertical do texto no container
        color: 'darkslategrey', // cor do texto 
        borderColor: 'darkslategrey', // cor da borda 
        borderRadius: RFPercentage(2), // arrendondar borda
    }
});

export default styles;