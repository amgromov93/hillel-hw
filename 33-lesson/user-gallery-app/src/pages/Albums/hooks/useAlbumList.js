import { useEffect, useState } from "react";
import GalleryApi from "../../../hooks/GalleryApi";

export default function useAlbumsList(id) {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    GalleryApi
      .getAlbumList(id)
      .then((list) => {
        setAlbumList(list)
      })
  }, [id])

  return { albumList };
}
