import React from 'react';
import styles from'./Todo.module.css';
import Form from './Form';
import List from './List/List';
import useTodo from './useTodo';


function Todo() {
  const {
    onFormSubmit,
    changeStatus,
    deleteTodo,
    todoList,
    loading,
    error,
  } = useTodo();

  return (
    <>
      <Form onSubmit={onFormSubmit} />
      {error ? <div className={styles.error}>{error}</div> : null}
      {loading ? 'Loading...' : ''}
      {todoList.length > 0 && (
        <List
          todoList={todoList}
          onDelete={deleteTodo}
          onChange={changeStatus}
        />
      )}
    </>
  );
}

export default Todo;