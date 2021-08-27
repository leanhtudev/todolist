import React from 'react';
import Button from '@material-ui/core/Button';

export default function TodoItem({ company, product, onEdit, onDelete }) {
  return (
    <div className="todo-item">
      <div className="content">
        <h3>{company}</h3>
        <div className="text">{product}</div>
      </div>
      <div className="control">
        <Button
          variant="contained"
          color="primary"
          onClick={() => onEdit(company, product)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onDelete(company, product)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
