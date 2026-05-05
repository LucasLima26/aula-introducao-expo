import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade06() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [mensagem, setMensagem] = useState('');

    function calculaImc() {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        const tmpImc = pesoNum / (alturaNum * alturaNum);

        if (isNaN(tmpImc)) {
            setImc(0);
            setMensagem('Valores inseridos de forma incorreta!');
            return;
        }

        setImc(tmpImc);

        let msg = '';

        if (tmpImc < 18.5) {
            msg = 'Abaixo do peso';
        } else if (tmpImc < 25) {
            msg = 'Peso normal';
        } else if (tmpImc < 30) {
            msg = 'Sobrepeso';
        } else if (tmpImc < 35) {
            msg = 'Obesidade grau 1';
        } else if (tmpImc < 40) {
            msg = 'Obesidade grau 2';
        } else {
            msg = 'Obesidade grau 3';
        }

        setMensagem(msg);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 06</Text>

            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>
                {isNaN(imc) ? 'Valores inseridos de forma incorreta!' : imc.toFixed(2)}
            </Text>

            <Text style={[styles.imc, styles.txtMensagem]}>
                {mensagem}
            </Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    );
}