import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Pantalla1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Pantalla 1</Text>

      <Button
        title="Ir a Pantalla Secundaria"
        onPress={() => navigation.navigate('PANTALLA SECUNDARIA', { mensaje: 'Mensaje de la pantalla principal' })}
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

export default Pantalla1;
