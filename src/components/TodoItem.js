// TodoItem.js
import React, { useState } from 'react';
import '../css/TodoItem.css';

function TodoItem({ todo, onDelete, onUpdate }) {
  const [isUpdated, setIsUpdated] = useState(false);

  const handleUpdate = () => {
    onUpdate();
    setIsUpdated(true); // This will change the state to updated
  };

  // Add a style dynamically based on the isUpdated state
  const textStyle = isUpdated ? { color: 'green' } : {};

  return (
    <div className="todo-item">
      <span style={textStyle}>{todo.name} (Updated {todo.count} times)</span>
      <div className="buttons">
        <button className="update" onClick={handleUpdate}>Update</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
