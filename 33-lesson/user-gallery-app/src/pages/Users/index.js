import useUserList from "./hooks/useUserList";
import UserItem from "./UserItem";

export default function Users() {
  const { userList } = useUserList();

  return (
    <ul>
       {userList.map((user) => (
          <UserItem
            key={user.id}
            user={user}
          />
        ))}
    </ul>
  )
}