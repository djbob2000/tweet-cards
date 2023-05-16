import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/users.operations";
import { UserCard } from "../UserCard/UserCard";
import { selectUsers } from "../../redux/selectors";

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const loading = false;
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLoadMore = () => {
    console.log("Load MORE CLICKKKK");
    dispatch(fetchUsers(users.length));
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <ul className="users-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {users.length > 0 && <button onClick={handleLoadMore}>Load More</button>}
    </ul>
  );
};
