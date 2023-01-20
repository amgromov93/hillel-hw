import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, changeTodo } from "../store/actions/todo";
import ListItem from "./ListItem";
import styles from "./List.module.css";

export default function List({ todoList }) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function onSaveBtnClick() {
    const todo = {
      title: message,
      done: false,
      id: String(Math.random()),
    };

    dispatch(addTodo(todo));
    setMessage("");
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  function onDeleteBtnClick(id) {
    dispatch(deleteTodo(id));
  }

  function onChange(id) {
    dispatch(changeTodo(id));
  }

  return (
    <React.Fragment>
      <input type="text" value={message} onChange={onMessageChange} />
      <button onClick={onSaveBtnClick}>Save</button>

      <ul className={styles.container}>
        {todoList.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            onDelete={onDeleteBtnClick}
            onChange={onChange}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}
