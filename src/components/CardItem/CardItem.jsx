import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/users/users.operations";
import * as STC from "./CardItem.styled";
import CardBackgroundImg from "../../assets/images/card-background.png";
import CardBackgroundImg2x from "../../assets/images/card-background@2x.png";
import CardBackgroundImg3x from "../../assets/images/card-background@3x.png";
import Logo from "../../assets/images/sprite.svg";
import { CardAvatar } from "../CardAvatar/CardAvatar";
import { Button } from "../Button/Button";

export const CardItem = ({ user }) => {
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(updateUser(user.id));
    console.log("CLICKK FOLLLOW");
  };
  const following = null;

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
        btnText={following ? "FOLLOWING" : "FOLLOW"}
        isActive={user.following}
      ></Button>
    </STC.CardContainer>
  );
};
