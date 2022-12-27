import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [todoList, setTodoList] = useState([
    {"title":"voluptatem vitae tenetur","id":"1"},
    {"title":"inventore illum culpa","id":"2"},
    {"title":"tempore sit vel","id":"3"},
    {"title":"quasi fugiat vel","id":"4"},
    {"title":"quibusdam ullam sed","id":"5"},
    {"title":"ipsam deleniti laudantium","id":"6"},
    {"title":"officiis minus ratione","id":"7"},
    {"title":"eaque vero eius","id":"8"},
    {"title":"vitae vero magnam","id":"9"},
    {"title":"beatae perspiciatis","id":"10"}
  ]);

  function onSaveButtonClick() {
    const newArray = [
      ...todoList,
      {
        "title": message,
        "id": String(Math.random())
      }
    ]

    setTodoList(newArray);

    setMessage('')
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      <input type='text' value={message} onChange={onMessageChange} />
      <button onClick={onSaveButtonClick}>Save</button>
      
      <ul>
        {todoList.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    </>
  );
}

export default App;