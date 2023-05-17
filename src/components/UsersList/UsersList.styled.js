import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 20px;

  @media (min-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
`;
export const ListUsers = styled.ul``;
