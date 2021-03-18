import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  ${({ wrapperStyles }) => wrapperStyles}
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3.2rem;
  ${({ titleStyles }) => titleStyles}

  @media (max-width: 677px) {
    font-size: 2rem;
  }
`;
