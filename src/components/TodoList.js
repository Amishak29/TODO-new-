import React from 'react';
import TodoItem from './TodoItem';
import '../css/TodoList.css';

function TodoList({ todos, onDeleteTodo, onUpdateCount }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDeleteTodo(todo.id)}
          onUpdate={() => onUpdateCount(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;