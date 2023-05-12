import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../styles';


const CompletedTodos = (props) => {

    const { todos } = props.todosList;

    return (
        <SafeAreaView>
            <FlatList 
                style={styles.todosContainer}
                data={todos.filter(item => item.completed)}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={(item) => <Todo item={item} isCompleted/>}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    todosList: state.todos
});

export default connect(mapStateToProps)(CompletedTodos);