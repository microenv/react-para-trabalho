import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainPage from "../components/MainPage";

export default function Home() {
  return (
    <MainPage currentMenu="home">
      <div className={styles.container}>
        <Head>
          <title>
            React Para Trabalho - Curso Grátis e Open Source para Aprender React
          </title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Aprenda React <span>com vídeos!</span>
          </h1>

          <p className={styles.description}>React Para Trabalho</p>

          <div className={styles.grid}>
            <a href="/aprender-react-do-zero" className={styles.card}>
              <h3>Começar do zero &rarr;</h3>
              <p>Se você não sabe nada de React ou programação.</p>
            </a>

            <a href="/nossa-metodologia" className={styles.card}>
              <h3>Nossa metodologia &rarr;</h3>
              <p>Como nós vamos te ensinar a programar.</p>
            </a>

            <a href="/open-source" className={styles.card}>
              <h3>Totalmente grátis &rarr;</h3>
              <p>Não precisa pagar para começar a estudar.</p>
            </a>

            <a href="/open-source" className={styles.card}>
              <h3>Open Source &rarr;</h3>
              <p>Gostaria de contribuir, deixando este curso ainda melhor?</p>
            </a>
          </div>
        </main>

        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer> */}
      </div>
    </MainPage>
  );
}
