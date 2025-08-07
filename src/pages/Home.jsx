import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import WeatherInfo from '../components/WeatherInfo';
import '../styles.css';

const Home = () => {
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <div className="container">
  <h1 className="title">My Todo App</h1>
  <WeatherInfo />
  <TodoForm editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
  <TodoList setEditingTodo={setEditingTodo} />
</div>
  );
};

export default Home;