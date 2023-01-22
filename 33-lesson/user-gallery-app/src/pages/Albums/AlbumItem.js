import { Link } from "react-router-dom";
import styles from '../index.module.css';

export default function AlbumItem({ album }) {
  
  return (
    <li className={styles.container} id={album.id}>
      <span>{album.title}</span>
      <Link to={`${album.id}`}>
        <button>Photos</button>
      </Link>
    </li>
  )
}