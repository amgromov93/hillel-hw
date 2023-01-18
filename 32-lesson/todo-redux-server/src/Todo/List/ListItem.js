import styles from './ListItem.module.css';
import {useDispatch} from "react-redux";
import {deleteTodo, statusChangeTodo, editTodo} from "../../store/actions/todo";

export default function ListItem({ todo }) {
  const done = todo.done ? styles.done : '';
  const dispatch = useDispatch();

  function onEditBtnClick(e) {
    e.stopPropagation();

    dispatch(editTodo(todo));
  }

  return (
    <li className={done} onClick={() => dispatch(statusChangeTodo(todo.id))}>
      <span>{todo.title}</span>
      <button onClick={onEditBtnClick}>[Edit]</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>[Delete]</button>
    </li>
  )
}