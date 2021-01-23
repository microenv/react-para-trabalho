import Head from "next/head";
import styles from "../styles/AprenderReactDoZero.module.scss";
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
      <div className={styles.contentWrapper}>
        {/* <div className={styles.banner}></div> */}
        <div className={styles.content}>
          <h2>Como começar a aprender</h2>
          <p className={styles.firstParagraph}>
            Se você nunca programou ou sabe apenas o básico de programação, este
            lugar é pra você. Mas para que você aprenda a programar com React, é
            necessário primeiro aprender HTML/CSS/Javascript.
            <br />
            <br />
            Caso você não entenda muito sobre HTML/CSS/Javascript, nós criamos
            uma página especialmente pra isso!
            <br />
            <a href="/html-css-javascript">Aprender HTML / CSS / Javascript</a>
          </p>
        </div>

        <div className={styles.firstVideo}>
          <ResponsiveEmbed
            src="https://www.youtube.com/embed/Ws9WVHhNq5M"
            allowFullScreen
          />
        </div>
      </div>
    </MainPage>
  );
}
