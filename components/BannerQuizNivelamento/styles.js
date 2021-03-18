import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px 0;
  background: #222266;

  @media (max-width: 677px) {
    display: none;
  }
`;

export const TesteNivelamento = styled.p`
  color: #98b;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 18px;
`;

export const Title = styled.h3`
  font-size: 28px;
  color: #eee;
`;

export const Description = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
  color: #77a;
  max-width: 500px;
`;
