import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/users/users.operations";

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleFollowClick = () => {
    dispatch(updateUser(user.id));
    console.log("CLICKK FOLLLOW");
  };

  return (
    <li className="user-card">
      <img src={user.avatar} alt="Avatar" />
      <h2>{user.user}</h2>
      <p>{user.tweets} Tweets</p>
      <p>{user.followers} Followers</p>
      <button
        className={user.following ? "following" : ""}
        onClick={handleFollowClick}
      >
        {user.following ? "FOLLOWING" : "FOLLOW"}
      </button>
    </li>
  );
};
