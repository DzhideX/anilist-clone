import Head from "next/head";
import Layout from "../components/layout";
import Landing from "../components/rootRoute/landing";
import Filters from "../components/rootRoute/filters";
import InfoCardList from "../components/rootRoute/infoCardList";
import topTen from "../lib/topTen";

export async function getServerSideProps() {
  const data = await topTen();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <Layout>
      <Head>
        <title>Search Anime · Anilist</title>
        <link rel="icon" href="/images/AnilistIcon.png" />
      </Head>

      <Landing />
      <Filters />
      <InfoCardList data={data.data.Page.media} />

      <style jsx>{`
        .title {
          margin: 0;
        }
      `}</style>
    </Layout>
  );
}
