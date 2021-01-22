import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainPage from "../components/MainPage";

export default function NossaMetodologia() {
  return (
    <MainPage currentMenu="nossa-metodologia">
      <div className={styles.container}>
        <Head>
          <title>Nossa Metodologia</title>
        </Head>
        @TODO
      </div>
    </MainPage>
  );
}
