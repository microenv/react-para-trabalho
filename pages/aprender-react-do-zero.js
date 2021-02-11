import Head from "next/head";
import styles from "../styles/AprenderReactDoZero.module.scss";
import MainPage from "../components/MainPage";
import ResponsiveEmbed from "react-responsive-embed";
import MainPageTitle from "../components/MainPageTitle";
import Modal from "antd/lib/modal/Modal";
import falcorModel from "../falcor/falcorModel";
import { useState } from "react";
import BannerQuizNivelamento from "../components/BannerQuizNivelamento";
import { Row, Col } from 'antd';
import React, {Fragment} from 'react'; 
import Media from 'react-media';

export default function NossaMetodologia({ articles }) {
  const [currentArticle, setCurrentArticle] = useState({
    id: 0,
  });

  

  return (
    <MainPage currentMenu="comece-por-aqui" noPadding>
    
      <Head>
        <title>Aprender React do Zero!</title>
      </Head>

      <MainPageTitle
        wrapperStyles={`
          margin: 0;
          padding: 1rem 0;
          background-color: #222266;
        `}
        titleStyles={`
          margin: 0;
          color: #fff;
          text-shadow: -1px 1px #000;
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
            lugar é pra você.  Mas para que você aprenda a programar com React, é
            necessário primeiro aprender HTML/CSS/Javascript.
            <br />
            <br />
            Caso você não entenda muito sobre HTML/CSS/Javascript, nós criamos
            uma página especialmente pra isso!
            <br />
            <a href="/html-css-javascript">Aprender HTML / CSS / Javascript</a>
          </p>
        </div>

        <div className="page-content dark-section">
          <div className={styles.NaoExisteLinear}>
            <h2>Não existe uma forma linear</h2>

            <p>
              Aqui neste site, nós separamos os assuntos importantes e, para
              cada assunto, você terá várias opções de vídeo ensinando a mesma
              coisa. Dessa forma, mesmo que você não tenha entendido um assunto,
              poderá ver outros vídeos sobre a mesma coisa de um criador de
              conteúdo diferente.
            </p>
          </div>

          <p className={styles.highlightText}>
            É necessário que você entenda bem todos os assuntos deste site, pois
            assim você estará apto(a) a conseguir um emprego.
          </p>
        </div>

        <BannerQuizNivelamento />

        <div className={styles.footer}>
          <div className="page-content">
            <a href="/react-basico" className={styles.nextPageLink}>
              Próximo Passo &raquo;
            </a>
          </div>
        </div>

        {/* O que é react: https://www.youtube.com/watch?v=6IuQUgeDPg0 */}

        <div className={styles.firstVideo}>
          {/* <ResponsiveEmbed
            src="https://www.youtube.com/embed/Ws9WVHhNq5M"
            allowFullScreen
          /> */}
          {/*
          <ul>
            {articles.map((a) => {
              return <li>{a.title}</li>;
            })}
          </ul>
          */}
          <div>{JSON.stringify(articles)}</div>
          <Modal
            title="Modal 1000px width"
            centered
            visible={!!currentArticle.id}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={1000}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </div>
      </div>
    </MainPage>
  );
}

export async function getServerSideProps(context) {
  // const articles = await falcorModel.get(
  //   'aprenderReactDoZero["articles"][0..100]["title"]'
  //   // ["aprenderReactDoZero.articles", "length"],
  // );
  // const articles = await falcorModel
  //   .get(['articles[0]["video_url"]'])
  //   .forEach((a) => console.log("aaa = ", a));
  const articles = null;

  // console.log("artyicles: ", articles);

  return {
    props: {
      articles: articles || null,
    },
  };
}
