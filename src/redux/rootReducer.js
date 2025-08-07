import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todo/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;