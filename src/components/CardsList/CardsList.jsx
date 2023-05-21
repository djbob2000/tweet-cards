import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/users.operations";
import { CardItem } from "../CardItem/CardItem";
import { selectUsers } from "../../redux/selectors";
import * as STC from "./CardsList.styled";
import { Button } from "../Button/Button";
import { loadMore, resetUsers } from "redux/users/users.slice";

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  // const page = useSelector((state) => state.users.page);

  const loading = false;
  useEffect(() => {
    dispatch(resetUsers);
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLoadMore = async () => {
    await dispatch(loadMore());
    await dispatch(fetchUsers());
  };

  return (
    <>
      <STC.Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <STC.CardsList>
              {users &&
                users.map((user) => <CardItem key={user.id} user={user} />)}
            </STC.CardsList>
            <p></p>
          </>
        )}
      </STC.Container>
      {users.length > 2 && (
        <Button onClick={handleLoadMore} btnText={"Load More"}></Button>
      )}
    </>
  );
};
