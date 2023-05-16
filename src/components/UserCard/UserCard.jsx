import React from "react";
import { useDispatch } from "react-redux";
// import { followUser } from "../redux/actions";

export const UserCard = ({ user }) => {
  //   const dispatch = useDispatch();

  const handleFollowClick = () => {
    // dispatch(followUser(user.id));
    console.log("CLICKK FOLLLOW");
  };

  return (
    <div className="user-card">
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
    </div>
  );
};

export default UserCard;
