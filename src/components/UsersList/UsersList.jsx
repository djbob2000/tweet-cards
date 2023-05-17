import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/users.operations";
import { UserCard } from "../UserCard/UserCard";
import { selectUsers } from "../../redux/selectors";
import * as STC from "./UsersList.styled";

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const loading = false;
  useEffect(() => {
    dispatch(fetchUsers());
    console.log("DISPATCHH");
  }, [dispatch]);

  const handleLoadMore = () => {
    console.log("Load MORE CLICKKKK");
    dispatch(fetchUsers(users.length));
  };
  console.log("USERS In Users List=========>>>>", users);
  const fromStore = useSelector((state) => state.users);

  console.log("State=========>>>>", fromStore);

  return (
    <STC.Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <STC.ListUsers>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
          {users.length > 3 && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </STC.ListUsers>
      )}
    </STC.Container>
  );
};
