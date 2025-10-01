import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function Sumadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    setResultado(parseInt(num1) + parseInt(num2));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Número 1" keyboardType="numeric" onChangeText={setNum1} style={{marginBottom:10, borderWidth:1, padding:5}}/>
      <TextInput placeholder="Número 2" keyboardType="numeric" onChangeText={setNum2} style={{marginBottom:10, borderWidth:1, padding:5}}/>
      <Button title="Sumar" onPress={sumar} />
      {resultado !== null && <Text style={{marginTop:10}}>Resultado: {resultado}</Text>}
    </View>
  );
}
