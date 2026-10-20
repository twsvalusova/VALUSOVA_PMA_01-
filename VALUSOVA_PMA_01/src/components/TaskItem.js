import {Text, View, StyleSheet} from 'react-native';
export default function TaskItem({itemTask}) {
    const [done, setDone] = useState(false);

    return ( <Text style={styles.taskText}> {itemTask} </Text> );
}

const styles = StyleSheet.create({

  taskText: {
    backgroundColor: 'lightpink',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 8,
    borderRadius: 4,
    fontSize: 14,
    borderWidth: 5,
    borderColor: '#B4DD1E',
  },

});