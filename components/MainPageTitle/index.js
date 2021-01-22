import React from "react";
import * as S from "./styles";

export default function MainPageTitle({ title, wrapperStyles, titleStyles }) {
  return (
    <S.Wrapper wrapperStyles={wrapperStyles}>
      <S.Title titleStyles={titleStyles}>{title}</S.Title>
    </S.Wrapper>
  );
}
