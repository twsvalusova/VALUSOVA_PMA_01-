import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='ahoj' />
        <button title='Zadaj' />
      </View>

      <View style={styles.taskContainer}>
        <Text>Udalosti: </Text>
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

});
