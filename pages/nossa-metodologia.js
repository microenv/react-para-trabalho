import Head from "next/head";
import styles from "../styles/NossaMetodologia.module.css";
import MainPage from "../components/MainPage";
import ResponsiveEmbed from "react-responsive-embed";
import MainPageTitle from "../components/MainPageTitle";
import Modal from "antd/lib/modal/Modal";
import falcorModel from "../falcor/falcorModel";

export default function NossaMetodologia() {
  return (
    <MainPage currentMenu="nossa-metodologia">
      <Head>
        <title>Nossa Metodologia</title>
      </Head>

      <MainPageTitle title="Nossa Metodologia" />

      <div className={styles.mainVideo}>
        <ResponsiveEmbed
          src="https://www.youtube.com/embed/ZtMzB5CoekE"
          allowFullScreen
        />
      </div>
    </MainPage>
  );
}
