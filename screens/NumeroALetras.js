import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import numeroALetras from '../utils/numeroALetras';

export default function NumeroALetras() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const convertir = () => {
    const n = parseInt(numero);
    if (n < 1 || n > 1000) {
      setResultado("Número fuera de rango (1-1000)");
    } else {
      setResultado(numeroALetras(n));
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Número (1-1000)" keyboardType="numeric" onChangeText={setNumero} style={{marginBottom:10, borderWidth:1, padding:5}}/>
      <Button title="Convertir" onPress={convertir} />
      {resultado !== '' && <Text style={{marginTop:10}}>{resultado}</Text>}
    </View>
  );
}
