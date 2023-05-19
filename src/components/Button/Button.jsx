import * as STC from "./Button.styled";

export const Button = ({ onClick, btnText }) => {
  return <STC.Button onClick={onClick}>{btnText}</STC.Button>;
};
