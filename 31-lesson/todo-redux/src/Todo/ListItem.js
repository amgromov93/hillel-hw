import styles from "./ListItem.module.css";

export default function ListItem({ todo, onDelete, onChange }) {
  const done = todo.done ? styles.done : "";
  const classes = done + " " + styles.list;

  return (
    <li className={classes}>
      <span onClick={() => onChange(todo.id)}>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
