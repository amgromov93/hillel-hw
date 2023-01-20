import React from "react";
import List from "./List";
import { useSelector } from "react-redux";

export default function Todo() {
  const todoList = useSelector((state) => state.todoList);

  return <List todoList={todoList} />;
}
