import styled from "styled-components";

export const Button = styled.button`
  min-width: 196px;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  color: white;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: ${(props) => (props.following ? "#5CD3A8" : "#EBD8FF")};
`;
