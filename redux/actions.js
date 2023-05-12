const { GET_TODOS_LIST, ADD_TODO, TOGGLE_COMPLETED } = require("./constants");

export const getTodos = () => {
    return {
        type: GET_TODOS_LIST
    };
}

export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
} 

export const toggleComplete = (id) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: {id}
    }
}