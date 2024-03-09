import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (name, count) => {
    const newTodos = Array.from({ length: count }, (_, index) => ({
      id: Date.now() + index,
      name,
      count: 0
    }));
    setTodos(t => [...t, ...newTodos]);
  };

  const deleteTodo = (id) => {
    setTodos(t => t.filter(todo => todo.id !== id));
  };

  const updateCount = (id) => {
    setTodos(t => t.map(todo => todo.id === id ? { ...todo, count: todo.count + 1 } : todo));
  };

  return (
    <div className="app">
      <h1>Day Goals!</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateCount={updateCount} />
      <footer className="App-footer">
        Made by Amisha
      </footer>
    </div>
  );
}

export default App;