import React, { useState } from "react";
import Drawer from "./Drawer";
import * as S from "./styles";

export default function Page({ children, currentMenu }) {
  // const [page, setPage] = useState({
  //   mobileOpen: false,
  // });

  return (
    <S.Wrapper>
      <Drawer currentMenu={currentMenu}>{children}</Drawer>
    </S.Wrapper>
  );
}
