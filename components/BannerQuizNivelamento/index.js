import { Button } from "antd";
import Head from "next/head";
import React, { useState } from "react";
import * as S from "./styles";

export default function BannerQuizNivelamento() {
  return (
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
            fontSize: "22px",
          }}
          onClick={() => alert("Funcionalidade em Desenvolvimento!")}
        >
          Fazer Quiz de Nivelamento
        </Button>
      </div>
    </S.Wrapper>
  );
}
