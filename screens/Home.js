import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Home() {
  return (
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <Image source={require('../assets/foto.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text style={{ fontSize: 20, marginTop: 10 }}>Nombre: Angel</Text>
      <Text>Apellido: Ramirez Santos</Text>
      <Text>Correo: 20230291@itla.edu.do</Text>
    </View>
  );
}
