import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
  const { fetchUsers } = useActions();
  const { users, loading, error } = useTypedSelector((state) => state.user);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Іде загрузка даних ...</h1>;
  } else if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
