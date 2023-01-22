import { useEffect, useState } from "react";
import GalleryApi from "../../../hooks/GalleryApi";

export default function useUserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    GalleryApi
      .getUserList()
      .then((list) => {
        setUserList(list)
      })
  }, [])

  return { userList };
}
