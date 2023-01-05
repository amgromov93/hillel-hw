import { useState, useEffect } from 'react';
import TodoApi from './TodoApi';

export default function useTodo() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    TodoApi
      .getList()
      .then((list) => {
        setTodoList(list);
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  function onFormSubmit(todo) {
    setLoading(true);

    TodoApi
      .create(todo)
      .then((newTodo) => {
        setTodoList([
          ...todoList,
          newTodo,
        ]);
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function deleteTodo(id) {
    setLoading(true);

    TodoApi
      .delete(id)
      .then(() => {
        const list = todoList.filter(todo => todo.id !== id);
        setTodoList(list);
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function changeStatus(id, done) {
    TodoApi
      .update(id, done)
      .then((todoEl) => {
        const list = todoList.map((todo) => todo.id === todoEl.id ? todoEl : todo);
        
        setTodoList(list);
      })
  }

  return {
    onFormSubmit,
    todoList,
    deleteTodo,
    loading,
    error,
    changeStatus,
  };
}