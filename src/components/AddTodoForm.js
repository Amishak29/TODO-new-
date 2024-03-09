// AddTodoForm.js
import React, { useState } from 'react';
import '../css/AddTodoForm.css';

function AddTodoForm({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Split the input by commas, then for each segment, split by the last number found.
    input.split(',').forEach(segment => {
      const [name, countStr] = segment.trim().split(/(\d+)$/).filter(Boolean);
      const count = countStr ? parseInt(countStr, 10) : 1;
      if (name) {
        onAddTodo(name.trim(), count);
      }
    });
    setInput('');
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter tasks separated by commas e.g., Task1 2, Task2 3"
      />
      <button type="submit" className="add-todo-button">Add Todos</button>
    </form>
  );
}

export default AddTodoForm;
