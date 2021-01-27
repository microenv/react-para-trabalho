import { Button } from "antd";
import Head from "next/head";
import React, { useState } from "react";
import * as S from "./styles";

export default function BannerQuizNivelamento() {
  return (
    <S.Wrapper>
      <h3>Teste de Nivelamento</h3>
      <p>Você está pronto para aprender React?</p>

      <p>
        Descubra se seus conhecimentos em HTML / CSS / Javascript estão bons o
        suficiente para você não se perder enquanto estuda React!
      </p>

      <Button type="primary">Fazer Quiz de Nivelamento</Button>
    </S.Wrapper>
  );
}
