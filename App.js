// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa los componentes de pantalla
import Pantalla1 from './screens/Pantalla1';
import Pantalla2 from './screens/Pantalla2';
import Pantalla3 from './screens/Pantalla3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PANTALLA PRINCIPAL" // Nombre usado en la navegación
          component={Pantalla1}     // Componente de la pantalla principal
        />
        <Stack.Screen
          name="PANTALLA SECUNDARIA" // Nombre usado en la navegación
          component={Pantalla2}     // Componente de la pantalla secundaria
        />
        <Stack.Screen
          name="PANTALLA TERCIARIA" // Nombre usado en la navegación
          component={Pantalla3}     // Componente de la pantalla terciaria
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
