import InfoCard from "../infoCard";
import topTen from "../../lib/topTen";
import { useEffect, useState } from "react";

const InfoCardList = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <div className="info-card-list">
        <div className="info-card-list__info">
          <h3>TOP 100 ANIME</h3>
          <p> View All</p>
        </div>
        {data.map(
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
            <InfoCard
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
        .info-card-list {
          width: 90rem;
          margin: 0 auto 3rem auto;
        }

        .info-card-list__info {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .info-card-list__info *:hover {
          color: #26343f;
        }

        .info-card-list__info h3 {
          margin: 0 0 0 2rem;
          cursor: pointer;
          color: #404e5c;
          font-size: 1.17rem;
        }

        .info-card-list__info p {
          cursor: pointer;
          color: #647380;
          font-weight: 600;
          margin-right: 1.5rem;
          font-size: 0.82rem;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default InfoCardList;
