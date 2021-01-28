import React from "react";
import MainPage from "../MainPage";

export default function TrainingPage({ currentMenu, training }) {
  return (
    <MainPage currentMenu={currentMenu}>
      <pre>{JSON.stringify(training, null, 2)}</pre>
    </MainPage>
  );
}
