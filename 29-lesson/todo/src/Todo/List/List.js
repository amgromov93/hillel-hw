import ListItem from "./ListItem";
import styles from './List.module.css';

export default function List({ todoList, onDelete, onChange }) {
  return (
      <ul className={styles.container}>
        {todoList.map(todo => (
          <ListItem 
            key={todo.id} 
            todo={todo} 
            onDelete={onDelete}
            onChange={onChange}
          />
        ))}
      </ul>
  )
}