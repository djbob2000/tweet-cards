import * as STC from "./Header.styled";

export const Header = () => {
  return (
    <STC.AppBar>
      <STC.Nav>
        <STC.StyledNavLink to="/">Home</STC.StyledNavLink>
        <STC.StyledNavLink to="/tweets">Tweets</STC.StyledNavLink>
      </STC.Nav>
    </STC.AppBar>
  );
};
