import Head from "next/head";
import styles from "../../styles/ReactBasico.module.scss";
import MainPage from "../../components/MainPage";
import falcorModel from "../../falcor/falcorModel";
import TrainingPage from "../../components/TrainingPage";

export default function ReactBasico({ topics }) {
  return (
    <TrainingPage
      currentMenu="html-css-javascript"
      siderLinkPrefix="/html-css-javascript"
      topics={topics}
    >
      Selecione um tópico ao lado
    </TrainingPage>
  );
}

export async function getServerSideProps() {
  const results = await falcorModel.get(
    'trainings["by-slug"]["react-basico"]["topics"]["asc"][0..100]["slug", "title", "description"]'
  );

  return {
    props: {
      topics:
        results.json["trainings"]["by-slug"]["react-basico"]["topics"]["asc"],
    },
  };
}
