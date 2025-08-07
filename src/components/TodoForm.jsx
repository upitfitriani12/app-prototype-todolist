import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../redux/todo/todoSlice';

function TodoForm({ editingTodo, setEditingTodo }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [category, setCategory] = useState('general');

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
      setCategory(editingTodo.category);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const todoData = {
      id: editingTodo ? editingTodo.id : Date.now(),
      text,
      category,
      completed: false,
    };

    editingTodo ? dispatch(editTodo(todoData)) : dispatch(addTodo(todoData));
    setText('');
    setCategory('general');
    setEditingTodo(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
      <button type="submit">{editingTodo ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default TodoForm;
