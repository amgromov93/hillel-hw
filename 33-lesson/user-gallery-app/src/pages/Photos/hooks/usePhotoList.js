import { useEffect, useState } from "react";
import GalleryApi from "../../../hooks/GalleryApi";

export default function usePhotoList(id) {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    GalleryApi
      .getPhotoList(id)
      .then((list) => {
        setPhotoList(list)
      })
  }, [id])

  return { photoList };
}
