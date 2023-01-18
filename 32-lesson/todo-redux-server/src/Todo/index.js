import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Form from "./Form";
import List from "./List/List";
import {fetchTodo} from "../store/actions/todo";

export default function Todo() {
  const loading = useSelector(state => state.loading);
  const todo = useSelector(state => state.todo);
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch])

  return (
    <>
      <Form todo={todo} />
      {loading ? <span>Loading...</span> : null}
      <List todoList={todoList} />
    </>
  )
}


