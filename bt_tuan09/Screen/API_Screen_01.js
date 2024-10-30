import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const API_Screen_01 = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    if (name) {
      navigation.navigate('API_Screen_02', { name });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/imgTitle.png')} style={{ height: 250, width: 250 }} />
      <Text style={styles.title}>MANAGE YOUR TASK</Text>

      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  title: { fontSize: 24, marginBottom: 20, color: '#8353E2', fontWeight: 'bold', width: 200, textAlign: 'center' },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: { marginRight: 10 },
  input: { flex: 1, paddingVertical: 10, fontSize: 16, outline: 'none' },
  
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default API_Screen_01;
