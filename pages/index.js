import Head from "next/head";
import Layout from "../components/layout";
import Landing from "../components/rootRoute/landing";
import Filters from "../components/rootRoute/filters";
import InfoCardList from "../components/rootRoute/infoCardList";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Search Anime · Anilist</title>
        <link rel="icon" href="/images/AnilistIcon.png" />
      </Head>

      <Landing />
      <Filters />
      <InfoCardList />

      <style jsx>{`
        .title {
          margin: 0;
        }
      `}</style>
    </Layout>
  );
}
