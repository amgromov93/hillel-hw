import { useParams } from "react-router-dom";
import usePhotoList from "./hooks/usePhotoList";
import PhotoItem from "./PhotoItem";

export default function Photos() {
  let { albumsId } = useParams();
  const { photoList } = usePhotoList(albumsId);

  return (
    <div>
      {photoList?.map(photo => (
        <PhotoItem
          key={photo.id}
          photo={photo}
        />
      ))}
    </div>
  )
}