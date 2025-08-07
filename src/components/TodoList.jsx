import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todo/todoSlice';

function TodoList({ setEditingTodo }) {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
  {todos.map((todo) => (
    <li key={todo.id} className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text} ({todo.category})
      </span>
      <button onClick={() => setEditingTodo(todo)}>✏️</button>
      <button className="delete-button" onClick={() => dispatch(deleteTodo(todo.id))}>
        🗑️
      </button>
    </li>
  ))}
</ul>
  );
}

export default TodoList;