import Head from "next/head";
import React, { useState } from "react";
import Drawer from "./Drawer";
import * as S from "./styles";

export default function MainPage({ children, currentMenu }) {
  // const [page, setPage] = useState({
  //   mobileOpen: false,
  // });

  return (
    <S.Wrapper>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drawer currentMenu={currentMenu}>{children}</Drawer>
    </S.Wrapper>
  );
}
