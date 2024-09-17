import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Pantalla3 = ({ route, navigation }) => {
  // Recuperar los parámetros de route.params
  const { mensaje2, irA } = route.params || {}; // Maneja el caso en que no haya parámetros

  // Función para restablecer la pila y llevar al usuario a Pantalla 1
  const resetNavigation = () => {
    navigation.reset({
      index: 0, // Pantalla 1 será la única pantalla en la pila
      routes: [{ name: 'PANTALLA PRINCIPAL' }] // Restablece la pila con Pantalla 1
    });
  };

  // Navegación condicional basada en el parámetro 'irA'
  const handleConditionalNavigation = () => {
    if (irA === 'Pantalla1') {
      navigation.navigate('PANTALLA PRINCIPAL');
    } else if (irA === 'Pantalla2') {
      navigation.navigate('PANTALLA SECUNDARIA');
    } else {
      // Si 'irA' no es un valor esperado, se puede mostrar un mensaje o hacer otra acción
      alert('No hay una pantalla a la que redirigir.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Pantalla 3</Text>
      {mensaje2 && <Text>Mensaje Recibido: {mensaje2}</Text>}

      {/* Botón para regresar a la pantalla anterior */}
      <Button
        title="Regresar"
        onPress={() => navigation.goBack()}
      />

      {/* Botón para reemplazar Pantalla 3 con Pantalla 1 */}
      <Button
        title="Reemplazar con Pantalla 1"
        onPress={() => navigation.replace('PANTALLA PRINCIPAL')}
      />

      {/* Botón para restablecer la pila y volver a Pantalla 1 */}
      <Button
        title="Reiniciar a Pantalla Principal"
        onPress={resetNavigation}
      />

      {/* Botón para navegación condicional basada en 'irA' */}
      <Button
        title="Navegar Condicionalmente"
        onPress={handleConditionalNavigation}
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

export default Pantalla3;
