import animeQuery from "../../lib/animeQuery";

export async function getServerSideProps({ query }) {
  const animeInfo = await animeQuery(query.id);
  return {
    props: {
      data: animeInfo.data.Media,
    },
  };
}

const AnimeInfoPage = ({ data }) => {
  return (
    <>
      <div className="anime">
        <h3> {data.title.romaji}</h3>
        {JSON.stringify(data)}
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default AnimeInfoPage;
