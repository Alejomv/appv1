import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const Calculadora = () => {
  const [simple, setSimple] = useState({ manzanas: '', costo_manzanas: '', manzanas_deseadas: '' });
  const [compuesto, setCompuesto] = useState({ botellas: '', litros: '', peso: '', botellas_deseadas: '', litros_deseados: '' });

  const [resultadoSimple, setResultadoSimple] = useState(null);
  const [resultadoCompuesto, setResultadoCompuesto] = useState(null);

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

  const calcularCompuesto = () => {
    if (!Object.values(compuesto).every(v => v)) {
      Alert.alert('Error', 'Por favor, complete todos los campos para la Regla de Tres Compuesta.');
      return;
    }
    const res = (parseFloat(compuesto.botellas_deseadas) * parseFloat(compuesto.litros_deseados) * parseFloat(compuesto.peso)) / (parseFloat(compuesto.botellas) * parseFloat(compuesto.litros));
    setResultadoCompuesto(res);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 40 }}>
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

        <Text style={styles.title}>Regla de Tres Compuesta</Text>
        <Text style={styles.description}>Hemos ido a la fuente del pueblo para recoger agua. Sabemos que 5 botellas de agua, de 2 litros cada una, pesan 10 kilos. ¿Cuánto pesan 2 botellas de 3 litros cada una?</Text>

        {Object.keys(compuesto).map((key, index) => (
          <View key={index} style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, { borderColor: borderColor(compuesto[key]) }]}
              placeholder={key.replace('_', ' ').toUpperCase()}
              keyboardType="numeric"
              onChangeText={text => setCompuesto({ ...compuesto, [key]: text })}
            />
            <Text style={{ color: borderColor(compuesto[key]) }}>{displaySymbol(compuesto[key])}</Text>
          </View>
        ))}

        <Button title="Calcular Compuesto" onPress={calcularCompuesto} />
        <Text>Resultado Compuesto: {resultadoCompuesto !== null ? resultadoCompuesto : 'N/A'}</Text>
        <View style={{ height: 40 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

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

export default Calculadora;
