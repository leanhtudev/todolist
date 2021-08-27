import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from './components/Todos';
import TodoCreator from './components/TodoCreator';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ company: '', product: '' });
  const [showLoading, setShowLoading] = useState(false);

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    try {
      setShowLoading(true);

      const res = await axios({
        method: 'GET',
        url: 'http://localhost:3002/all',
      });
      if (res) {
        setTodos(normalizeRes(res.data.data));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setShowLoading(false);
    }
  };
  const normalizeRes = (data) => {
    return Object.keys(data).map((item) => ({
      company: item,
      product: data[item],
    }));
  };

  // create
  const onTodoCreate = async (e) => {
    e.preventDefault();
    try {
      setShowLoading(true);

      const res = await axios({
        method: 'POST',
        url: 'http://localhost:3002/data',
        data: {
          [newTodo.company]: newTodo.product,
        },
      });
      if (res) {
        setNewTodo({ company: '', product: '' });
        getTodos();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setShowLoading(false);
    }
  };
  const onTodoDelete = async (company, product) => {
    try {
      setShowLoading(true);
      const res = await axios({
        method: 'DELETE',
        url: `http://localhost:3002/data/${company}`,
      });
      if (res) {
        getTodos();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setShowLoading(false);
    }
  };
  const onTodoEdit = (company, product) => {
    setNewTodo({ company, product });
  };
  return (
    <div className="app">
      <Container maxWidth="md">
        <TodoCreator
          newTodo={newTodo}
          onChange={onFieldChange}
          onSubmit={onTodoCreate}
        />
        <Todos todos={todos} onDelete={onTodoDelete} onEdit={onTodoEdit} />
        {showLoading ? (
          <div className="loading">
            <CircularProgress />
          </div>
        ) : null}
      </Container>
    </div>
  );
}

export default App;
