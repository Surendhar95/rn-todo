import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  FlatList
} from 'react-native';
import { Checkbox, Modal } from "native-base";


const intialValues = [
    {
      id: 1,
      name: "Task 1",
      completed: false
    },
    {
      id: 2,
      name: "Task 2",
      completed: false
    },
    {
      id: 3,
      name: "Task 3",
      completed: true
    },
    {
        id: 4,
        name: "Task 4",
        completed: false
      },
      {
        id: 5,
        name: "Task 5",
        completed: true
      },
  ]
  
  const styles = StyleSheet.create({
    container: {
      width: '100%', 
      top: 20,
      alignItems: 'center',
      justifyContent: 'center'

    },
    todosContainer: {
        flexDirection: 'column',
        height: 500,
        width: '100%',
        overflow: 'scroll',
        color: '#000',
    },
    todo: {
      padding: 10,
      flexDirection: 'row',
      marginTop: 10,
      width: '80%', 
      height: 50, 
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: '#B0E0E6',
      justifyContent: 'center'
    },
    checkbox: {
      justifyContent: 'flex-start'
    },
    taskName: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 10
    },
    addTodos: {
        height: 30,
        width: '100%',
        alignItems: 'center',
    },
    addBtn: {
        width: 80,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        height: 300,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        top: '30%'
    },
    input: {
        height: 50,
        width: '80%',
        backgroundColor: 'lightgrey',
        marginBottom: 20,
        marginTop: 20
    }
  });

const Todos =  () => {
    const [ todos, setTodos ] = useState([...intialValues]);
    const [ showModal, setShowModal ] = useState(false);
    const [ newTodo, setNewTodo ] = useState(''); 
    const [ toggleId, setToggleId ] = useState(-1);     // Stores the current todo id that is toggled by checkbox

    // This is the new hook that we introduced to handle the updates to the state of the todos list
    useEffect(() => {
        const newTodos = todos.map(item => item.id === toggleId ? { ...item, completed: !item.completed } : item);
        setTodos([...newTodos]);
    }, [toggleId]);

    const handleChange = (value) => {
        setNewTodo(value);
    }

    const handleSubmit = () => {
        const id = todos.length + 1;
        const newTodoObj = { id, name: newTodo, completed: false };
        setTodos([...todos, newTodoObj]);
        setShowModal(false);
        setNewTodo('');
    }

    console.log('all todos', todos)

  
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.todosContainer}
                data={todos}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={(item) => {
                    return(
                        <View key={item.item.id} style={styles.todo}>
                            <Checkbox 
                                isChecked={item.item.completed} 
                                style={styles.checkbox} 
                                accessibilityLabel="check to complete the task"
                                onChange={() => setToggleId(item.item.id)}
                            />
                            <Text style={styles.taskName}>{item.item.name}</Text>
                        </View>
                    )
                    
                }}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.addTodos}>
                <TouchableOpacity 
                    style={styles.addBtn} 
                    onPress={() => setShowModal(!showModal)}
                >
                    <Text>Add Todo</Text>
                </TouchableOpacity>
            </View>
            <Modal
                isOpen={showModal}
                avoidKeyboard
                onClose={() => setShowModal(!showModal)}
                style={styles.modal}

            >
                
                <Text>Add Todo</Text>
                <TextInput
                    style={styles.input}
                    value={newTodo}
                    onChangeText={handleChange}
                />
                <TouchableHighlight onPress={() => handleSubmit()} style={styles.addBtn}>
                    <Text>Submit</Text>
                </TouchableHighlight>
            </Modal>
      </SafeAreaView>
    );
  }

  export default Todos;