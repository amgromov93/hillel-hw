import ListItem from "./ListItem";

export default function List({ todoList }) {
  return (
    <ul>
      {todoList.map(todo => (
        <ListItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  )
}