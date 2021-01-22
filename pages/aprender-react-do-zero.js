import Head from "next/head";
import styles from "../styles/AprenderReactDoZero.module.css";
import MainPage from "../components/MainPage";
import ResponsiveEmbed from "react-responsive-embed";
import MainPageTitle from "../components/MainPageTitle";

export default function NossaMetodologia() {
  return (
    <MainPage currentMenu="comece-por-aqui" noPadding>
      <Head>
        <title>Aprender React do Zero!</title>
      </Head>

      <MainPageTitle
        wrapperStyles={`
          margin: 0;
        `}
        titleStyles={`
          margin: 0;
          padding: 1rem 0;
          color: #fff;
          text-shadow: -1px 1px #000;
          background-color: #001628;
          background-image: linear-gradient(to top, #001628, #5f4aaa);
          color: #fff;
          `}
        title="Aprenda React do Zero!"
      />
      <div className={styles.banner}></div>
      <div className={styles.spacer} />
    </MainPage>
  );
}
