import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todo/todoSlice';

function TodoList({ setEditingTodo }) {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text} ({todo.category})
          </span>
          <button onClick={() => setEditingTodo(todo)}>✏️</button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
