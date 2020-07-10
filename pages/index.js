import Head from "next/head";
import Layout from "../components/layout";
import Landing from "../components/rootRoute/landing";
import Filters from "../components/rootRoute/filters";
import MediaCardList from "../components/rootRoute/mediaCardList";
import animeListQuery from "../lib/animeListQuery";

export async function getServerSideProps() {
  const topScore = await animeListQuery(10, "sort: SCORE_DESC");
  const mostPopular = await animeListQuery(6, "sort: POPULARITY_DESC");
  const mostPopularThisSeason = await animeListQuery(
    6,
    "sort: POPULARITY_DESC, season: SUMMER, seasonYear: 2020"
  );
  const mostPopularNextSeason = await animeListQuery(
    6,
    "sort: POPULARITY_DESC, season: FALL, seasonYear: 2020"
  );
  const trendingNow = await animeListQuery(6, "sort: TRENDING_DESC");
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
        data={trendingNow.data.Page.media}
      />

      <MediaCardList
        infoTitle="POPULAR THIS SEASON"
        typeOfCard="picture"
        data={mostPopularThisSeason.data.Page.media}
      />

      <MediaCardList
        infoTitle="UPCOMING NEXT SEASON"
        typeOfCard="picture"
        data={mostPopularNextSeason.data.Page.media}
      />

      <MediaCardList
        infoTitle="ALL TIME POPULAR"
        typeOfCard="picture"
        data={mostPopular.data.Page.media}
      />

      <MediaCardList
        infoTitle="TOP 100 ANIME"
        typeOfCard="info"
        data={topScore.data.Page.media}
      />

      <style jsx>{`
        .title {
          margin: 0;
        }
      `}</style>
    </Layout>
  );
}
