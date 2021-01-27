import React from "react";
import * as S from "./styles";

export default function MainPageTitle({ title, wrapperStyles, titleStyles }) {
  return (
    <S.Wrapper wrapperStyles={wrapperStyles}>
      <div className="page-content">
        <S.Title titleStyles={titleStyles}>{title}</S.Title>
      </div>
    </S.Wrapper>
  );
}
