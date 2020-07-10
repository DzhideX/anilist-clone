import MediaCard from "../mediaCard";

const MediaCardList = ({ data, typeOfCard, infoTitle }) => {
  return (
    <>
      <div className="media-card-list">
        <div className="media-card-list__info">
          <h3>{infoTitle}</h3>
          <p> View All</p>
        </div>
        <div className="media-card-list__picture">
          {typeOfCard === "picture" &&
            data.map(
              (
                {
                  coverImage,
                  title,
                  genres,
                  meanScore,
                  format,
                  episodes,
                  season,
                  seasonYear,
                  id,
                },
                i
              ) => (
                <MediaCard
                  typeOfCard={typeOfCard}
                  image={coverImage.large}
                  title={title.romaji}
                  genres={genres}
                  score={meanScore}
                  type={format}
                  episodes={episodes}
                  releaseDate={season + ` ${seasonYear}`}
                  color={coverImage.color}
                  key={id}
                  id={id}
                />
              )
            )}
        </div>
        {typeOfCard === "info" &&
          data.map(
            (
              {
                coverImage,
                title,
                genres,
                meanScore,
                popularity,
                format,
                episodes,
                season,
                seasonYear,
                status,
                id,
              },
              i
            ) => (
              <MediaCard
                typeOfCard={typeOfCard}
                rank={i + 1}
                image={coverImage.medium}
                title={title.romaji}
                genres={genres}
                score={meanScore}
                users={popularity}
                type={format}
                episodes={episodes}
                releaseDate={season + ` ${seasonYear}`}
                status={status}
                color={coverImage.color}
                key={id}
                id={id}
              />
            )
          )}
      </div>
      <style jsx>{`
        .media-card-list {
          width: 90rem;
          margin: 0 auto 1rem auto;
        }

        .media-card-list__info {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .media-card-list__info *:hover {
          color: #26343f;
        }

        .media-card-list__info h3 {
          margin: 0 0 0 2rem;
          cursor: pointer;
          color: #647380;
          font-size: 1.17rem;
        }

        .media-card-list__info p {
          cursor: pointer;
          color: #647380;
          font-weight: 600;
          margin-right: 1.5rem;
          font-size: 0.82rem;
          font-weight: 700;
        }

        .media-card-list__picture {
          display: grid;
          grid-gap: 0 1.2rem;
          grid-template-columns: repeat(auto-fill, 185px);
          justify-content: space-between;
          padding: 0 1.5rem 0 2rem;
        }
      `}</style>
    </>
  );
};

export default MediaCardList;
