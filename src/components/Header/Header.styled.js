import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AppBar = styled.div`
  margin-bottom: 16px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 16px;
  color: #ebd8ff;
  &.active {
    color: #5cd3a8;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;
