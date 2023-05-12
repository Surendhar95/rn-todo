import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  FlatList
} from 'react-native';
import { Checkbox, Modal } from "native-base";
import { styles } from '../styles';

const Todos =  (props) => {
      
    const { 
        todos, 
        showModal, 
        handleToggle, 
        setShowModal,
        handleChange, 
        handleSubmit,
        newTodo
    } = props;
  
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.todosContainer}
                data={todos}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={(item) => <Todo item={item} handleToggle={handleToggle}/>}
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