import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/users.operations";
import { CardItem } from "../CardItem/CardItem";
import { selectUsers, selectIsLoading } from "../../redux/selectors";
import * as STC from "./CardsList.styled";
import { Button } from "../Button/Button";
import { loadMore, resetUsers } from "redux/users/users.slice";
import { BeatLoader } from "react-spinners";

export const CardsList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(resetUsers());
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLoadMore = async () => {
    await dispatch(loadMore());
    await dispatch(fetchUsers());
  };

  return (
    <>
      <STC.Wrapper>
        <STC.CardsList>
          {users && users.map((user) => <CardItem key={user.id} user={user} />)}
        </STC.CardsList>
      </STC.Wrapper>

      <STC.LoadMoreWrap>
        {isLoading ? (
          <BeatLoader color="#4B2A99" />
        ) : (
          <Button
            onClick={handleLoadMore}
            btnText={"Load More"}
            disabled={isLoading}
          ></Button>
        )}
      </STC.LoadMoreWrap>
    </>
  );
};
