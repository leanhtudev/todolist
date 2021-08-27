import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default function TodoCreator({ newTodo, onChange, onSubmit }) {
  return (
    <div className="todo-creator">
      <form action="">
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          name="company"
          value={newTodo.company}
          onChange={onChange}
          fullWidth={true}
        />
        <TextField
          id="outlined-basic"
          label="Product"
          variant="outlined"
          name="product"
          value={newTodo.product}
          onChange={onChange}
          fullWidth={true}
        />
      </form>

      <div className="control">
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
