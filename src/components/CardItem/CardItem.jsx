import React from "react";
import * as STC from "./CardItem.styled";
import CardBackgroundImg from "../../assets/images/card-background.png";
import CardBackgroundImg2x from "../../assets/images/card-background@2x.png";
import CardBackgroundImg3x from "../../assets/images/card-background@3x.png";
import Logo from "../../assets/images/sprite.svg";
import { CardAvatar } from "../CardAvatar/CardAvatar";
import { Button } from "../Button/Button";
import { followingUser, unFollowingUser } from "../../redux/users/users.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectFollowingIDs } from "../../redux/selectors";
import { updateFollowers } from "../../redux/users/users.operations";

export const CardItem = ({ user }) => {
  const dispatch = useDispatch();
  const followingIDs = useSelector(selectFollowingIDs);
  const isFollowing = followingIDs.includes(user.id);

  const handleFollow = () => {
    if (isFollowing) {
      dispatch(unFollowingUser(user.id));
      user = { ...user, followers: user.followers - 1 };
      dispatch(updateFollowers(user));
    } else {
      dispatch(followingUser(user.id));
      user = { ...user, followers: user.followers + 1 };
      dispatch(updateFollowers(user));
    }

    console.log("CLICKK FOLLLOW");
  };

  return (
    <STC.CardContainer>
      <STC.Logo>
        <use href={`${Logo}#logo-goit`} />
      </STC.Logo>
      <STC.CardBackgroundImg
        srcSet={`${CardBackgroundImg} 1x, ${CardBackgroundImg2x} 2x, ${CardBackgroundImg3x} 3x`}
        src={`${CardBackgroundImg}`}
        alt="Pictogram check mark and question mark"
      />
      <CardAvatar imageURL={user.avatar} />
      <STC.InfoWrap>
        <STC.InfoText>{user.tweets} Tweets</STC.InfoText>
        <STC.InfoText>{user.followers} Followers</STC.InfoText>
      </STC.InfoWrap>

      <Button
        onClick={handleFollow}
        btnText={isFollowing ? "FOLLOWING" : "FOLLOW"}
        isActive={isFollowing}
      ></Button>
    </STC.CardContainer>
  );
};
