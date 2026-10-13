import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[text, setText] = useState('');
  const[taskList, setTaskList] = useState([]);

  function inputHandler(text) {
    setText(text);
  }
  function addHandler() {
    setTaskList([...taskList, text]);
    setText('');
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput 
        onChangeText={inputHandler} 
        style={styles.input} 
        placeholder='ahoj' />

        <button onPress={addHandler} title='Zadaj' />
      </View>

      <View style={styles.taskContainer}>
        <Text>Udalosti: </Text>
          {taskList.map((i) => (
            <Text style={styles.taskText} key={i}>
            {i}
            </Text>
          ))}
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#B4DD1E',
    width: '80% '
  },

  inputContainer: {
    flex: 1, 
    borderColor: 'hotpink', 
    allignItems: 'center', 
    justifyContent: 'space-between', 
    flexDirection: 'row',
    paddingHorizontal: 20
  },

  taskContainer: {
    flex: 1, 
    backgroundColor: 'lightpink', 
    borderColor: 'hotpink' ,
    borderTopWidth: 3
  },
  taskText: {
    backgroundColor: 'lightblue',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    fontSize: 20
  }


});
