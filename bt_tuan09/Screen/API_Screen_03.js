import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const API_Screen_03 = ({ route, navigation }) => {
  const { job, name } = route.params;
  const [jobTitle, setJobTitle] = useState(job ? job.title : '');

  const handleFinish = async () => {
    if (job) {
      await axios.put(`https://67219f5898bbb4d93ca901a3.mockapi.io/task/${job.id}`, { title: jobTitle });
    } else {
      await axios.post('https://67219f5898bbb4d93ca901a3.mockapi.io/task', { title: jobTitle });
    }
    navigation.navigate('API_Screen_02', { name });
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.greeting}>Hi {name}, Have a great day ahead!</Text>
      </View>

      <Text style={styles.title}>{job ? 'EDIT YOUR JOB' : 'ADD YOUR JOB'}</Text>
      
      <View style={styles.inputContainer}>
        <Icon name="list-alt" size={24} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          value={jobTitle}
          onChangeText={setJobTitle}
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>FINISH</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/imgTitle.png')} style={styles.noteImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F6F8FA', alignItems: 'center' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, width: '100%' },
  backButton: { marginRight: 10 }, // Style for the back button
  greeting: { fontSize: 16, color: '#333', textAlign: 'center', flex: 1 },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333', 
    marginTop: 20, 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: '#888',
    backgroundColor: '#FFFFFF',
  },
  icon: { marginRight: 10 },
  input: { flex: 1, paddingVertical: 10, fontSize: 16, color: '#333' },
  button: {
    backgroundColor: '#0A84FF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: { marginTop: 40, alignItems: 'center' },
  noteImage: { width: 150, height: 150, resizeMode: 'contain' },
});

export default API_Screen_03;
