import animeQuery from "../../lib/animeQuery";
import Layout from "../../components/layout";
import Sidebar from "../../components/anime/sidebar";
import Overview from "../../components/anime/overview";
import AnimeHeader from "../../components/anime/animeHeader";
import refactorAnimeData from "../../lib/refactorAnimeData";

export async function getServerSideProps({ query }) {
  const animeInfo = await animeQuery(query.id);
  const animeData = refactorAnimeData(animeInfo);
  return {
    props: {
      ...animeData,
    },
  };
}

const AnimeInfoPage = ({ data, studios, producers }) => {
  return (
    <>
      <Layout backgroundColor="#EDF1F5">
        <div className="anime">
          <AnimeHeader data={data} />
          <div className="anime__content">
            <Sidebar
              title={data?.title}
              format={data.format}
              episodes={data.episodes}
              episodeDuration={data.duration}
              status={data.status}
              startDate={data.startDate}
              endDate={data.endDate}
              season={data.season}
              seasonYear={data.seasonYear}
              averageScore={data.averageScore}
              meanScore={data.meanScore}
              popularity={data.popularity}
              favourites={data.favourites}
              source={data.source}
              hashtag={data.hashtag}
              genres={data.genres}
              synonyms={data.synonyms}
              studios={studios}
              producers={producers}
              tags={data.tags}
              links={data.externalLinks}
            />
            <Overview
              relations={data.relations.edges}
              characters={data.characters}
              staff={data.staff.edges}
              stats={data.stats}
              streamingEpisodes={data.streamingEpisodes}
              recommendations={data.recommendations}
              trailer={data.trailer}
              reviews={data.reviews.edges}
            />
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .anime {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .anime__content {
          display: grid;
          grid-column-gap: 2.5rem;
          grid-template-columns: 13.8rem auto;
          margin: 2.8rem auto 0 auto;
          position: relative;
          width: 89rem;
          max-width: 87rem;
        }

        @media screen and (max-width: 1350px) {
          .anime__content {
            width: 70rem;
          }
        }

        @media screen and (max-width: 1150px) {
          .anime__content {
            width: 50rem;
            justify-content: center;
          }
        }

        @media screen and (max-width: 1000px) {
          .anime__content {
            width: 40rem;
          }
        }

        @media screen and (max-width: 750px) {
          .anime__content {
            width: 30rem;
            grid-template-columns: 1fr;
          }
        }

        @media screen and (max-width: 500px) {
          .anime__content {
            width: 20rem;
          }
        }
      `}</style>
    </>
  );
};

export default AnimeInfoPage;
