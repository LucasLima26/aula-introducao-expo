import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    container : {
        backgroundColor: '#ffff00' ,
        // margin: 20, 
        padding:  RFPercentage(2),
        flex: 1,
        borderRadius: 20,
    },
     titulo: {
        fontSize:  RFPercentage (4),
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom:  RFPercentage (5) ,
    },

    texto: {
        fontSize: RFPercentage (2),
        fontFamily: 'arial',
    },
});
export default styles;