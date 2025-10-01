import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Sumadora from './screens/Sumadora';
import NumeroALetras from './screens/NumeroALetras';
import TablaMultiplicar from './screens/TablaMultiplicar';
import Experiencia from './screens/Experiencia';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Página Inicial" component={Home} />
        <Stack.Screen name="Sumadora" component={Sumadora} />
        <Stack.Screen name="Traductor de Números" component={NumeroALetras} />
        <Stack.Screen name="Tabla de Multiplicar" component={TablaMultiplicar} />
        <Stack.Screen name="Experiencia Personal" component={Experiencia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Menu({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button title="Página Inicial" onPress={() => navigation.navigate('Página Inicial')} />
      <Button title="Sumadora" onPress={() => navigation.navigate('Sumadora')} />
      <Button title="Traductor de Números" onPress={() => navigation.navigate('Traductor de Números')} />
      <Button title="Tabla de Multiplicar" onPress={() => navigation.navigate('Tabla de Multiplicar')} />
      <Button title="Experiencia Personal" onPress={() => navigation.navigate('Experiencia Personal')} />
    </View>
  );
}
