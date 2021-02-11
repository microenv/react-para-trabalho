import styled from "styled-components"; //importa styles para os componentes

//adc esse style ao container Wrapper, do index.js
export const Wrapper = styled.div`
  padding: 50px 0;
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
  font-size: 22px;
  color: #eee;
`;

//adc esse style na parte <S.Description></S.Description> do index.js
export const Description = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  color: #77a;
  max-width: 500px;
`;

export const MyButton = styled.button`
  background: #5F4AAA;
  color: #fff;
  border-radius: 5px;
  padding: 0 50px;
  height: 50px;
  display: flex;
  flexFlow: column;
  align-items: center;
  @media (min width: 379px) and (max-width: 600px){
    line-height: 30px;
    font-size: 15px;
    flex-direction: row;
  }
  @media (min-width:290px) and (max-width: 378x){
    font-size: 10px;
    flex-direction: row;
  }

`;



