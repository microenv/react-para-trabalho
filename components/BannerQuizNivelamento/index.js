import { Button } from "antd"; //importando botão do antd
import Head from "next/head"; //componente integrado para anexar elementos do head
import React, { useState } from "react";/*permite adc o state do React (onde estão os dados do componente), 
// um hook, em uma função */
import * as S from "./styles";//'S' não precisa importar cada componente do styles, separadamente

export default function BannerQuizNivelamento() {
  return (
     /*S.Wrapper vai estilizar esse container conforme "export const Wrapper = styled.div" do styles.js
    S.TesteNivelamento, S.Title, S.Description, vão usar o style conforme o que for
     definido em seu respectivo "item" no style.js*/
     // Wrapper é uma cápsula, um content, "div capa" de um componente
    <S.Wrapper>
      <div className="page-content">
        <S.TesteNivelamento>Teste de Nivelamento</S.TesteNivelamento>

        <S.Title>Você está pronto para aprender React?</S.Title>

        <S.Description>
          Descubra se seus conhecimentos em HTML / CSS / Javascript estão bons o
          suficiente para você não se perder enquanto estuda React!
        </S.Description>

        <Button
          type="primary"
          style={{
            padding: "0 50px",
            height: "50px",
            lineHeight: "50px",
            fontSize: "3vw",
            flexFlow: "column",
          }}
          onClick={() => alert("Funcionalidade em Desenvolvimento!")}
        >
          Fazer Quiz de Nivelamento
        </Button>
      </div>
    </S.Wrapper>
  );
}

