import {Link} from "react-router-dom";
import styles from "../index.module.css";

export default function UserItem({ user }) {
  
  return (
    <li className={styles.container} id={user.id}>
      <span>{user.name}</span>
      <Link to={`${user.id}`}>
        <button>Albums</button>
      </Link>
    </li>
  )
}