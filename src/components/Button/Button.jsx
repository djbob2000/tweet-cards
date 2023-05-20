import * as STC from "./Button.styled";

export const Button = ({ onClick, btnText, isActive }) => {
  return (
    <STC.Button onClick={onClick} active={isActive}>
      {btnText}
    </STC.Button>
  );
};
