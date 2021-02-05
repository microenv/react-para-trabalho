import styled from "styled-components"; //importa styles para os componentes

//adc esse style ao container Wrapper, do index.js
export const Wrapper = styled.div`
  padding: 100px 0;
  background: #222266;
`;

//adc esse style na parte <S.TesteNivelamento></S.TesteNivelamento> do index.js
export const TesteNivelamento = styled.p`
  color: #98b;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 18px;
`;

//adc esse style na parte <S.Title></S.Teitle> do index.js
export const Title = styled.h3`
  font-size: 28px;
  color: #eee;
`;

//adc esse style na parte <S.Description></S.Description> do index.js
export const Description = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
  color: #77a;
  max-width: 500px;
`;



