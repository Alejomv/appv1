import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ReglaDeTresSimple = () => {
  const [simple, setSimple] = useState({ manzanas: '', costo_manzanas: '', manzanas_deseadas: '' });
  const [resultadoSimple, setResultadoSimple] = useState(null);

  const displaySymbol = (value) => value ? '✔️' : '❌';
  const borderColor = (value) => value ? 'green' : 'grey';

  const calcularSimple = () => {
    if (!Object.values(simple).every(v => v)) {
      Alert.alert('Error', 'Por favor, complete todos los campos para la Regla de Tres Simple.');
      return;
    }
    const res = (parseFloat(simple.manzanas_deseadas) * parseFloat(simple.costo_manzanas)) / parseFloat(simple.manzanas);
    setResultadoSimple(res);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Regla de Tres Simple</Text>
      <Text style={styles.description}>Si 10 manzanas cuestan $20, ¿cuánto cuestan 5 manzanas?</Text>
      
      {Object.keys(simple).map((key, index) => (
        <View key={index} style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, { borderColor: borderColor(simple[key]) }]}
            placeholder={key.replace('_', ' ').toUpperCase()}
            keyboardType="numeric"
            onChangeText={text => setSimple({ ...simple, [key]: text })}
          />
          <Text style={{ color: borderColor(simple[key]) }}>{displaySymbol(simple[key])}</Text>
        </View>
      ))}

      <Button title="Calcular Simple" onPress={calcularSimple} />
      <Text>Resultado Simple: {resultadoSimple !== null ? resultadoSimple : 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    marginLeft: '10%',  // 10% margin on the left
    marginRight: '10%', // 10% margin on the right
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    padding: 8,
    height: 40,
  },
});

export default ReglaDeTresSimple;
