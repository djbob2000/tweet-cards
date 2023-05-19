import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/users.operations";
import { CardItem } from "../CardItem/CardItem";
import { selectUsers } from "../../redux/selectors";
import * as STC from "./CardsList.styled";

export const UsersList = () => {
  console.log("UsersList");
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

  console.log("users===>>>", users);
  return (
    <STC.Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <STC.CardsList>
          {users.map((user) => (
            <CardItem key={user.id} user={user} />
          ))}
          {users.length > 3 && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </STC.CardsList>
      )}
    </STC.Container>
  );
};
