import styles from './ListItem.module.css';

export default function ListItem({ todo, onDelete, onChange }) {
  const done = todo.done ? styles.done : '';
  const classes = done + ' ' + styles.list;
  
  return (
    <li className={classes}>
      <span onClick={() => onChange(todo.id, {done: !todo.done})}>{todo.title}</span>
      <div>
        <button>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  )
}