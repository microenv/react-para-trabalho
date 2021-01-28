import Head from "next/head";
import styles from "../styles/ReactBasico.module.scss";
import MainPage from "../components/MainPage";
import falcorModel from "../falcor/falcorModel";
import TrainingPage from "../components/TrainingPage";

export default function ReactBasico({ training }) {
  return <TrainingPage currentMenu="react-basico" training={training} />;
}

export async function getServerSideProps() {
  const training = await falcorModel.get(
    [
      "reactBasico",
      { from: 0, to: 100 },
      ["trainingSlug", "trainingTitle", "trainingDescription"],
    ],
    [
      "reactBasico",
      { from: 0, to: 100 },
      "videos",
      { from: 0, to: 100 },
      ["title", "url", "description"],
    ],
    [
      "reactBasico",
      { from: 0, to: 100 },
      "articles",
      { from: 0, to: 100 },
      ["title", "url", "description"],
    ]
  );

  return {
    props: { training: training.json.reactBasico },
  };
}
