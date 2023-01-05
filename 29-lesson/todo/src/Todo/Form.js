import React, { useState } from "react";

export default function Form({ onSubmit }) {
  const [message, setMessage] = useState('');

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault()

    const newTodo = {
      title: message,
      done: false,
    };

    onSubmit(newTodo);
    setMessage('');
  }
  
  return (
    <form onSubmit={onFormSubmit}>
      <input type='text' value={message} onChange={onMessageChange} />
    </form>
  );
}
