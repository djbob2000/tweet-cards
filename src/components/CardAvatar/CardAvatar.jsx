import * as STC from "./CardAvatar.styled";

export const CardAvatar = ({ imageURL }) => {
  return (
    <>
      <STC.Wrapper>
        <STC.Line />
        <STC.Circle />
        <STC.AvatarImage alt="User avatar" src={imageURL} />
      </STC.Wrapper>
    </>
  );
};
