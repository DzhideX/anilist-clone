import animeQuery from "../../lib/animeQuery";
import Layout from "../../components/layout";

export async function getServerSideProps({ query }) {
  const animeInfo = await animeQuery(query.id);
  let newDesc = "";
  animeInfo.data.Media.description.split("<br />").forEach((part, i) => {
    if (i % 2 === 0) {
      newDesc += `<p>${part}<p/>`;
    }
  });
  animeInfo.data.Media.description = newDesc;
  return {
    props: {
      data: animeInfo.data.Media,
    },
  };
}

const AnimeInfoPage = ({ data }) => {
  return (
    <>
      <Layout>
        <div className="anime">
          <div className="anime__header">
            {data.bannerImage && <div className="anime__header__banner"></div>}
            <div className="anime__header__info">
              <div className="anime__header__info__middle">
                <div className="anime__header__info__middle__left">
                  <img
                    className="anime__header__info__middle__left__image"
                    src={data.coverImage.large}
                  />
                  <div className="anime__header__info__middle__left__actions">
                    <div className="anime__header__info__middle__left__actions__add">
                      <div>
                        <p>Add to List</p>
                      </div>
                      <div>
                        <img src="/images/arrowdown-white.svg" />
                      </div>
                    </div>
                    <div className="anime__header__info__middle__left__actions__heart">
                      <img src="/images/heart.svg" />
                    </div>
                  </div>
                </div>
                <div className="anime__header__info__middle__right">
                  <h2>{data.title.romaji}</h2>
                  <div
                    className="anime__header__info__middle__right__description"
                    dangerouslySetInnerHTML={{
                      __html:
                        data.description.length <= 750
                          ? data.description
                          : data.description.substring(
                              0,
                              data.description.lastIndexOf(" ", 750)
                            ) + "...",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .anime {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .anime__header {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .anime__header__banner {
          height: 26rem;
          background-image: url(${data.bannerImage});
          background-position: 50% 35%;
          background-repeat: no-repeat;
          background-size: cover;
          margin-top: -3.75rem;
        }

        .anime__header__banner img {
          height: 100%;
          width: 100%;
        }

        .anime__header__info {
          height: 19rem;
          width: 100%;
          background-color: rgb(250, 250, 250);
        }

        .anime__header__info__middle {
          width: 69.5%;
          height: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.7fr 9fr;
        }

        .anime_header_info__middle__left {
          display: flex;
          flex-direction: column;
        }

        .anime__header__info__middle__left__image {
          height: 19rem;
          width: 100%;
          margin-top: -7.8rem;
          border-radius: 0.2rem;
        }

        .anime__header__info__middle__left__actions {
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .anime__header__info__middle__left__actions__add {
          height: 2.2rem;
          width: 11rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          background-color: rgb(61, 180, 242);
          border-radius: 0.18rem;
          cursor: pointer;
          color: rgb(255, 255, 255);
        }

        .anime__header__info__middle__left__actions__add div:nth-of-type(1) {
          width: 80%;
          height: 100%;
          display: flex;
          place-items: center;
          justify-content: center;
          padding-top: 0.2rem;
          font-weight: 400;
          font-size: 0.96rem;
        }

        .anime__header__info__middle__left__actions__add div:nth-of-type(2) {
          width: 20%;
          height: 100%;
          display: flex;
          place-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.14);
        }

        .anime__header__info__middle__left__actions__add
          div:nth-of-type(2)
          img {
          height: 0.8rem;
        }

        .anime__header__info__middle__left__actions__heart {
          height: 2.2rem;
          width: 2.2rem;
          background-color: rgb(232, 93, 117);
          display: grid;
          place-items: center;
          border-radius: 0.18rem;
          cursor: pointer;
        }

        .anime__header__info__middle__left__actions__heart img {
          height: 1rem;
        }

        .anime__header__info__middle__right {
          padding-left: 2rem;
        }

        .anime__header__info__middle__right__description {
          max-width: 56.25rem;
        }
      `}</style>
    </>
  );
};

export default AnimeInfoPage;
