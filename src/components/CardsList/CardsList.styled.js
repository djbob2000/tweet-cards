import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px 16px 36px 16px;
`;

export const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  justify-items: center;

  @media (min-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
`;
