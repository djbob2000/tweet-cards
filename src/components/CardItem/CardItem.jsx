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
import { updateUser } from "../../redux/users/users.operations";
import { selectIsLoading } from "../../redux/selectors";
import { BeatLoader } from "react-spinners";

export const CardItem = ({ user }) => {
  const isLoading = useSelector(selectIsLoading);

  const addComma = (followers) => {
    const strNumber = followers.toString();
    let result = "";
    let count = 0;

    for (let i = strNumber.length - 1; i >= 0; i--) {
      result = strNumber[i] + result;
      count++;

      if (count === 3 && i !== 0) {
        result = "," + result;
        count = 0;
      }
    }

    return result;
  };

  const dispatch = useDispatch();
  const followingIDs = useSelector(selectFollowingIDs);
  const isFollowing = followingIDs.includes(user.id);

  const handleFollow = () => {
    if (isFollowing) {
      dispatch(unFollowingUser(user.id));
      user = { ...user, followers: user.followers - 1 };
      dispatch(updateUser(user));
    } else {
      dispatch(followingUser(user.id));
      user = { ...user, followers: +user.followers + 1 };
      dispatch(updateUser(user));
    }
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
        <STC.InfoText>{addComma(user.followers)} Followers</STC.InfoText>
      </STC.InfoWrap>

      <Button
        onClick={handleFollow}
        btnText={
          isLoading ? (
            <BeatLoader color="#4B2A99" />
          ) : isFollowing ? (
            "FOLLOWING"
          ) : (
            "FOLLOW"
          )
        }
        isActive={isFollowing}
      ></Button>
    </STC.CardContainer>
  );
};
