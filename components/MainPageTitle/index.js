import React from "react";
import * as S from "./styles";

export default function MainPageTitle({ title }) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
