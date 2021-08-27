import React from 'react';
import TodoItem from './TodoItem';
export default function Todos({ todos, onDelete, onEdit }) {
  const renderTodos = () => {
    if (!todos || !todos.length) return null;
    return todos.map((todo) => (
      <TodoItem
        company={todo.company}
        product={todo.product}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ));
  };
  return <div className="todos">{renderTodos()}</div>;
}
