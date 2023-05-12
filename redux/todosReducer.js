import { ADD_TODO, GET_TODOS_LIST, TOGGLE_COMPLETED } from './constants';

const initialState = {
    todos: [
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
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS_LIST:
          return state;
        case ADD_TODO:
          return { ...state, todos: [ ...state.todos, action.payload] };
        case TOGGLE_COMPLETED:
          const newTodos = state.todos.map(item => item.id === action.payload.id ? { ...item, completed: !item.completed } : item);
          const completedTodos = newTodos.filter(item => item.completed);
          const incompletedTodos = newTodos.filter(item => !item.completed);
          return { ...state, todos: [ ...newTodos ] }
        default:
            return state;
    }
}

export default todosReducer;