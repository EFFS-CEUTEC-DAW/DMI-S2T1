import React, {useState} from 'react';
import {StyleSheet,Text,View,TextInput,Button,Alert} from 'react-native';

export const CalculatorComponent = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState(0);
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (operation === 1) {
      setResult(parseFloat(a) + parseFloat(b));
    } else if (operation === 2) {
      setResult(parseFloat(a) - parseFloat(b));
    } else if (operation === 3) {
      setResult(parseFloat(a) * parseFloat(b));
    } else if (operation === 4) {
      if (parseFloat(b) > 0) {
        setResult(parseFloat(a) / parseFloat(b));
      } else {
        Alert.alert('Error', 'La división por cero no está permitida.');
      }
    } else {
      Alert.alert('Error', 'Opción no está permitida.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, marginBottom: 15}}>Calculadora:</Text>
      <View style={styles.inputContainer}>
        <Text>Valor A:</Text>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          value={a}
          onChangeText={text => setA(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Valor B:</Text>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          value={b}
          onChangeText={text => setB(text)}
        />
      </View>
      <Text style={{fontSize:18,fontWeight:'bold',textDecorationLine: 'underline'}}>Seleccione Una Operación:</Text>
      <Text>(1)Suma, (2)Resta, (3)Multiplicación y (4)División</Text>
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        value={operation}
        onChangeText={text => setOperation(parseInt(text))}
      />
      <Text style={{fontSize: 35, marginBottom: 15}}>Resultado: {result || '---'}</Text>
      <Button title="Calcular" onPress={calculate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 50,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 15,
    margin: 5,
  },
});
