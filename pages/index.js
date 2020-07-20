import Head from "next/head";
import Layout from "../components/layout";
import Landing from "../components/rootRoute/landing";
import Filters from "../components/rootRoute/filters";
import MediaCardList from "../components/rootRoute/mediaCardList";
import animeListQuery from "../lib/animeListQuery";
import useWindowDimensions from "../lib/useWindowDimensions";

export async function getServerSideProps() {
  const { data } = await animeListQuery();
  const topScore = data.topScore;
  const mostPopular = data.mostPopular;
  const mostPopularThisSeason = data.mostPopularThisSeason;
  const mostPopularNextSeason = data.mostPopularNextSeason;
  const trendingNow = data.trendingNow;
  return {
    props: {
      topScore,
      mostPopular,
      mostPopularThisSeason,
      mostPopularNextSeason,
      trendingNow,
    },
  };
}

export default function Home({
  topScore,
  mostPopular,
  mostPopularThisSeason,
  mostPopularNextSeason,
  trendingNow,
}) {
  const { height, width } = useWindowDimensions();

  return (
    <Layout>
      <Head>
        <title>Search Anime · Anilist</title>
        <link rel="icon" href="/images/AnilistIcon.png" />
      </Head>

      <Landing />
      <Filters />

      <MediaCardList
        infoTitle="TRENDING NOW"
        typeOfCard="picture"
        data={trendingNow.media}
      />

      <MediaCardList
        infoTitle="POPULAR THIS SEASON"
        typeOfCard="picture"
        data={mostPopularThisSeason.media}
      />

      <MediaCardList
        infoTitle="UPCOMING NEXT SEASON"
        typeOfCard="picture"
        data={mostPopularNextSeason.media}
      />

      <MediaCardList
        infoTitle="ALL TIME POPULAR"
        typeOfCard="picture"
        data={mostPopular.media}
      />

      <MediaCardList
        infoTitle="TOP 100 ANIME"
        typeOfCard={width < 950 ? "picture" : "info"}
        data={topScore.media}
      />

      <style jsx>{`
        .title {
          margin: 0;
        }
      `}</style>
    </Layout>
  );
}
