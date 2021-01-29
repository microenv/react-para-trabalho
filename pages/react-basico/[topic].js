import Head from "next/head";
import styles from "../../styles/ReactBasico.module.scss";
import MainPage from "../../components/MainPage";
import falcorModel from "../../falcor/falcorModel";
import TrainingPage from "../../components/TrainingPage";

export default function ReactBasico({ topics, videos, articles }) {
  return (
    <TrainingPage
      currentMenu="react-basico"
      siderLinkPrefix="/react-basico"
      topics={topics}
      videos={videos}
      articles={articles}
    />
  );
}

export async function getServerSideProps({ query }) {
  const results = await falcorModel.get(
    'trainings["by-slug"]["react-basico"]["topics"]["asc"][0..100]["slug", "title", "description"]',
    `trainings["by-slug"]["react-basico"]["topics"]["by-slug"]["${query.topic}"]["slug", "title", "description"]`,
    `trainings["by-slug"]["react-basico"]["topics"]["by-slug"]["${query.topic}"]["videos","articles"][0..100]["url","title","description"]`
  );

  return {
    props: {
      topics:
        results.json["trainings"]["by-slug"]["react-basico"]["topics"]["asc"],
      videos:
        results.json["trainings"]["by-slug"]["react-basico"]["topics"][
          "by-slug"
        ][query.topic]["videos"],
      articles:
        results.json["trainings"]["by-slug"]["react-basico"]["topics"][
          "by-slug"
        ][query.topic]["articles"],
    },
  };
}
