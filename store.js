import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todosReducer from './redux/todosReducer';

const rootReducer = combineReducers({
    todos: todosReducer
});

const store = configureStore({
  reducer: rootReducer
})

export default store;