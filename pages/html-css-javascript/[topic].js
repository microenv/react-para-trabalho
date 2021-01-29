import Head from "next/head";
import styles from "../../styles/ReactBasico.module.scss";
import MainPage from "../../components/MainPage";
import falcorModel from "../../falcor/falcorModel";
import TrainingPage from "../../components/TrainingPage";

export default function ReactBasico({
  trainingData,
  topicData,
  topics,
  videos,
  articles,
}) {
  return (
    <TrainingPage
      currentMenu="html-css-javascript"
      siderLinkPrefix="/html-css-javascript"
      trainingData={trainingData}
      topicData={topicData}
      topics={topics}
      videos={videos}
      articles={articles}
    />
  );
}

export async function getServerSideProps({ query }) {
  const trainingSlug = "react-basico";

  const results = await falcorModel.get(
    `trainings["by-slug"]["${trainingSlug}"]["slug", "title", "description"]`,
    `trainings["by-slug"]["${trainingSlug}"]["topics"]["asc"][0..100]["slug", "title", "description"]`,
    `trainings["by-slug"]["${trainingSlug}"]["topics"]["by-slug"]["${query.topic}"]["slug", "title", "description"]`,
    `trainings["by-slug"]["${trainingSlug}"]["topics"]["by-slug"]["${query.topic}"]["videos","articles"][0..100]["url","title","description"]`
  );

  const _training = results.json["trainings"]["by-slug"][trainingSlug];

  const trainingData = {
    slug: _training["slug"],
    title: _training["title"],
    description: _training["description"],
  };
  const topics = _training["topics"]["asc"];
  const topicData = {
    slug: query.topic,
    title: _training["topics"]["by-slug"][query.topic]["title"],
    description: _training["topics"]["by-slug"][query.topic]["description"],
  };
  const videos = _training["topics"]["by-slug"][query.topic]["videos"];
  const articles = _training["topics"]["by-slug"][query.topic]["articles"];

  return {
    props: {
      trainingData,
      topicData,
      topics,
      videos,
      articles,
    },
  };
}
