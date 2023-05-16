import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "../actions";
import UserCard from "../UserCard/UserCard";

export const UsersList = () => {
  //   const dispatch = useDispatch();
  //   const { users, loading } = useSelector((state) => state.users);
  const users = [
    {
      user: "Margarita",
      tweets: "9",
      followers: "8",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/582.jpg",
      id: "1",
    },
  ];
  const loading = false;
  //   useEffect(() => {
  //     dispatch(fetchUsers());
  //   }, [dispatch]);

  const handleLoadMore = () => {
    console.log("Load MORE CLICKKKK");
    //   dispatch(fetchUsers(users.length));
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="users-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {users.length > 0 && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};
