import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>My Todo App</h1>
      <TodoForm editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
      <TodoList setEditingTodo={setEditingTodo} />
    </div>
  );
}

export default App;
