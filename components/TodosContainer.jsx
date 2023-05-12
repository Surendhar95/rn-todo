import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from '../redux/actions';
import Todos from './Todos';
import CompletedTodos from './CompletedTodos';
import {
    Text,
    View
} from 'react-native';
import { bindActionCreators } from 'redux';

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


const TodosContainer = (props) => {
    const [ newTodo, setNewTodo ] = useState(''); 
    const [ showModal, setShowModal ] = useState(false); 
    const [ toggleId, setToggleId ] = useState(-1);     // Stores the current todo id that is toggled by checkbox

    const { addTodo, toggleComplete } = props;
    const  { todos } = props.todos
    

    const handleChange = (value) => {
        setNewTodo(value);
    }

    const handleSubmit = () => {
        const id = todos.length + 1;
        const newTodoObj = { id, name: newTodo, completed: false };
        addTodo(newTodoObj);
        setShowModal(false);
        setNewTodo('');
    }

    const handleToggle = (id) => {
        toggleComplete(id);
    } 

    const screenName = props.route.name;
    return(
        <Todos 
            todos={todos}
            newTodo={newTodo}
            handleToggle={handleToggle}
            showModal={showModal}
            setShowModal={setShowModal}
            handleChange={handleChange}
            handleSubmit={() => handleSubmit()}
        /> 
    )

}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    addTodo: bindActionCreators(addTodo, dispatch),
    toggleComplete: bindActionCreators(toggleComplete, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);