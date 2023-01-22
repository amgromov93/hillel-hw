import { useParams } from "react-router-dom";
import useAlbumList from "./hooks/useAlbumList";
import AlbumItem from "./AlbumItem";

export default function Albums() {
  let { userId } = useParams();
  const { albumList } = useAlbumList(userId);

  return (
    <ul>
      {albumList.map(album => (
        <AlbumItem
          key={album.id}
          album={album}
        />
      ))}
    </ul>
  )
}