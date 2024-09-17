import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Pantalla2 = ({ route, navigation }) => {
  const { mensaje } = route.params || {}; // Recuperar el parámetro 'mensaje'

  const handlePress = (destination) => {
    // Define los parámetros y el destino basándote en la lógica
    const params = destination === 'PANTALLA PRINCIPAL'
      ? { irA: 'Pantalla1' }  // Parámetro para Pantalla3
      : { mensaje2: 'Mensaje de la pantalla secundaria' };  // Parámetro para Pantalla3

    navigation.navigate(destination, params);
  };

  return (
    <View style={styles.container}>
      <Text>PANTALLA SECUNDARIA</Text>
      {mensaje && <Text>Mensaje Recibido: {mensaje}</Text>}

      {/* Botones para navegar condicionalmente */}
      <Button
        title="Ir a Pantalla 3"
        onPress={() => handlePress('PANTALLA TERCIARIA')}
      />

      <Button
        title="Navegar a Pantalla Principal"
        onPress={() => handlePress('PANTALLA PRINCIPAL')}
      />

      {/* Reemplaza Pantalla 2 con Pantalla 3 */}
      <Button
        title="Reemplazar con Pantalla 3"
        onPress={() => navigation.replace('PANTALLA TERCIARIA')}
      />

      {/* Regresar a la pantalla anterior */}
      <Button
        title="Regresar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pantalla2;
