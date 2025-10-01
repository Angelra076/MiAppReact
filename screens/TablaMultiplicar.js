import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function TablaMultiplicar() {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const n = parseInt(numero);
    let arr = [];
    for(let i=1;i<=13;i++){
      arr.push(`${n} x ${i} = ${n*i}`);
    }
    setTabla(arr);
  }

  return (
    <View style={{padding:20}}>
      <TextInput placeholder="Número" keyboardType="numeric" onChangeText={setNumero} style={{marginBottom:10,borderWidth:1,padding:5}}/>
      <Button title="Generar Tabla" onPress={generarTabla}/>
      {tabla.map((linea,index)=><Text key={index}>{linea}</Text>)}
    </View>
  );
}
