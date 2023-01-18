import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo, updateTodo} from "../store/actions/todo";

export default function Form({ todo }) {
  const [message, setMessage] = useState(todo?.title ?? '');
  const dispatch = useDispatch();

  useEffect(() => {
    setMessage(todo?.title ?? '');
  }, [todo])

  function onFormSubmit(e) {
    e.preventDefault();

    const newTodo = {
      ...todo,
      title: message,
    };

    if (newTodo.id) {
      dispatch(updateTodo(newTodo))
    } else {
      dispatch(addTodo(newTodo))
    }

    setMessage('')
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type='text' value={message} onChange={onMessageChange} />
    </form>
  );
}