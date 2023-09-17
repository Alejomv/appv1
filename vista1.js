import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const Calculadora = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valorX, setValorX] = useState('');
  const [resultadoSimple, setResultadoSimple] = useState(null);

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [e, setE] = useState('');
  const [resultadoCompuesto, setResultadoCompuesto] = useState(null);

  const validarInputsSimple = () => {
    return valor1 && valor2 && valorX;
  };

  const validarInputsCompuesto = () => {
    return a && b && c && d && e;
  };

  const calcularSimple = () => {
    if (!validarInputsSimple()) {
      Alert.alert('Error', 'Por favor, complete todos los campos para la Regla de Tres Simple.');
      return;
    }
    const res = (parseFloat(valorX) * parseFloat(valor2)) / parseFloat(valor1);
    setResultadoSimple(res);
  };

  const calcularCompuesto = () => {
    if (!validarInputsCompuesto()) {
      Alert.alert('Error', 'Por favor, complete todos los campos para la Regla de Tres Compuesta.');
      return;
    }
    const res = (parseFloat(d) * parseFloat(e) * parseFloat(c)) / (parseFloat(a) * parseFloat(b));
    setResultadoCompuesto(res);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 40 }}></View>

      <Text style={styles.title}>Regla de Tres Simple</Text>
      <Text style={styles.description}>Si 10 manzanas cuestan $20, ¿cuánto cuestan 5 manzanas?</Text>
      
      <TextInput 
        style={[styles.input, (!valor1 && resultadoSimple !== null) ? styles.inputError : {}]} 
        placeholder="Valor 1 (Ejemplo: 10 manzanas)" 
        keyboardType="numeric" 
        onChangeText={text => setValor1(text)} 
      />
      
      <TextInput 
        style={[styles.input, (!valor2 && resultadoSimple !== null) ? styles.inputError : {}]} 
        placeholder="Valor 2 (Ejemplo: $20)" 
        keyboardType="numeric" 
        onChangeText={text => setValor2(text)} 
      />
      
      <TextInput 
        style={[styles.input, (!valorX && resultadoSimple !== null) ? styles.inputError : {}]} 
        placeholder="Valor X (Ejemplo: 5 manzanas)" 
        keyboardType="numeric" 
        onChangeText={text => setValorX(text)} 
      />
      
      <Button title="Calcular Simple" onPress={calcularSimple} />
      <Text>Resultado Simple: {resultadoSimple !== null ? resultadoSimple : 'N/A'}</Text>

      <Text style={styles.title}>Regla de Tres Compuesta</Text>
      <Text style={styles.description}>Hemos ido a la fuente del pueblo para recoger agua. Sabemos que 5 botellas de agua, de 2 litros cada una, pesan 10 kilos. ¿Cuánto pesan 2 botellas de 3 litros cada una?</Text>
      
      <TextInput 
        style={[styles.input, (!a && resultadoCompuesto !== null) ? styles.inputError : {}]} 
        placeholder="Valor a (Ejemplo: 5 botellas)" 
        keyboardType="numeric" 
        onChangeText={text => setA(text)} 
      />
      
      <TextInput 
        style={[styles.input, (!b && resultadoCompuesto !== null) ? styles.inputError : {}]} 
        placeholder="Valor b (Ejemplo: 2 litros)" 
        keyboardType="numeric" 
        onChangeText={text => setB(text)} 
      />
      
      <TextInput 
        style={[styles.input, (!c && resultadoCompuesto !== null) ? styles.inputError : {}]} 
        placeholder="Valor c (Ejemplo: 10 kilos)" 
        keyboardType="numeric" 
        onChangeText={text => setC(text)} 
      />
      
      <TextInput 
        style={[styles.input, (!d && resultadoCompuesto !== null) ? styles.inputError : {}]} 
        placeholder="Valor d (Ejemplo: 2 botellas)" 
        keyboardType="numeric" 
        onChangeText={text => setD(text)} 
      />
      
      <TextInput 
        style={[styles.input, (!e && resultadoCompuesto !== null) ? styles.inputError : {}]} 
        placeholder="Valor e (Ejemplo: 3 litros)" 
        keyboardType="numeric" 
        onChangeText={text => setE(text)} 
      />
      
      <Button title="Calcular Compuesto" onPress={calcularCompuesto} />
      <Text>Resultado Compuesto: {resultadoCompuesto !== null ? resultadoCompuesto : 'N/A'}</Text>

      <View style={{ marginBottom: 100 }}></View>
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
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default Calculadora;
