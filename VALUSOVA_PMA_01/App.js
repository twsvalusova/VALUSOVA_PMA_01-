import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

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
      placeholder="Zadaj text"
      value={text}
      />


        <Button onPress={addHandler} title='Zadaj' color="magenta" />
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
  },

  input: {
    borderWidth: 3,
    borderRadius: 2,
    borderColor: 'hotpink',
    width: '80%',
    height: 35,
    padding: 5,
    backgroundColor: 'lightpink',
  },

  inputContainer: {
    height: 120,
    paddingHorizontal: 15,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#B4DD1E',
  },

  taskContainer: {
    flex: 1,
    backgroundColor: 'hotpink',
    borderColor: 'lightyellow',
    borderTopWidth: 3,
    paddingTop: 10,
  },

  taskText: {
    backgroundColor: 'lightpink',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 8,
    borderRadius: 4,
    fontSize: 14,
  },
});