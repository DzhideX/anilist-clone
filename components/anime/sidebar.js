import { useState } from "react";

const Sidebar = ({
  title,
  format,
  episodes,
  status,
  season,
  seasonYear,
  meanScore,
  popularity,
  episodeDuration,
  startDate,
  endDate,
  averageScore,
  favourites,
  source,
  genres,
  synonyms,
  studios,
  producers,
  hashtag,
  tags,
  links,
}) => {
  const [isSpoilerVisible, setIsSpoilerVisible] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__rating">
          {" "}
          <img src="/images/star.svg" />
          <p>#99 Highest Rated All Time</p>
        </div>
        <div className="sidebar__rating">
          {" "}
          <img src="/images/red-heart.svg" />
          <p>#1 Most Popular All Time</p>
        </div>
        <div className="sidebar__data">
          {format && (
            <div>
              <h4>Format</h4>
              <p>{format}</p>
            </div>
          )}
          {episodes && (
            <div>
              <h4>Episodes</h4>
              <p>{episodes}</p>
            </div>
          )}
          {episodeDuration && (
            <div>
              <h4>Episode Duration</h4>
              <p>{episodeDuration} minutes</p>
            </div>
          )}
          {status && (
            <div>
              <h4>Status</h4>
              <p className="capitalize">
                {status.split("_").join(" ").toLowerCase()}
              </p>
            </div>
          )}
          {startDate.year && startDate.month && startDate.day && (
            <div>
              <h4>Start Date</h4>
              <p>
                {new Date(startDate.year, startDate.month - 1, startDate.day)
                  .toDateString()
                  .split(" ")
                  .map((num, i) => (i === 0 ? "" : i === 2 ? `${num},` : num))
                  .join(" ")}
              </p>
            </div>
          )}
          {endDate.year && endDate.month && endDate.day && (
            <div>
              <h4>End Date</h4>
              <p>
                {new Date(endDate.year, endDate.month - 1, endDate.day)
                  .toDateString()
                  .split(" ")
                  .map((num, i) => (i === 0 ? "" : i === 2 ? `${num},` : num))
                  .join(" ")}
              </p>
            </div>
          )}
          {season && (
            <div>
              <h4>Season</h4>
              <p className="capitalize">
                {season.toLowerCase() + " " + seasonYear}
              </p>
            </div>
          )}
          {averageScore && (
            <di>
              <h4>Average Score</h4>
              <p>{averageScore}%</p>
            </di>
          )}
          {meanScore && (
            <div>
              <h4>Mean Score</h4>
              <p>{meanScore}%</p>
            </div>
          )}
          {popularity && (
            <div>
              <h4>Popularity</h4>
              <p>{popularity}</p>
            </div>
          )}
          {favourites && (
            <div>
              <h4>Favorites</h4>
              <p>{favourites}</p>
            </div>
          )}
          {studios && (
            <div>
              <h4>Studios</h4>
              <p>{studios.join(", ")}</p>
            </div>
          )}
          {producers && (
            <div>
              <h4>Producers</h4>
              <p>{producers.join(", ")}</p>
            </div>
          )}
          {source && (
            <div>
              <h4>Source</h4>
              <p>{source}</p>
            </div>
          )}
          {hashtag && (
            <div>
              <h4>Hashtag</h4>
              <p>{hashtag}</p>
            </div>
          )}
          {genres && (
            <div>
              <h4>Genres</h4>
              <p>{genres.join(", ")}</p>
            </div>
          )}
          {title.romaji && (
            <div>
              <h4>Romaji</h4>
              <p>{title.romaji}</p>
            </div>
          )}
          {title.english && (
            <div>
              <h4>English</h4>
              <p>{title.english}</p>
            </div>
          )}
          {title.native && (
            <div>
              <h4>Native</h4>
              <p>{title.native}</p>
            </div>
          )}
          {synonyms.length > 0 && (
            <div>
              <h4>Synonyms</h4>
              <p>{synonyms.join(", ")}</p>
            </div>
          )}
        </div>
        {tags.length > 0 && (
          <div className="sidebar__tags">
            <h3> Tags </h3>
            {tags &&
              tags.map((tag) => (
                <div
                  key={tag.id}
                  className={`sidebar__tags__tag ${
                    tag.isMediaSpoiler && "spoiler-div"
                  }`}
                >
                  <p className={`${tag.isMediaSpoiler && "spoiler"}`}>
                    {tag.name}
                  </p>
                  <p>{tag.rank}%</p>
                </div>
              ))}
            <p
              className="sidebar__tags__show-spoilers"
              onClick={() => setIsSpoilerVisible(!isSpoilerVisible)}
            >
              {isSpoilerVisible ? "Hide" : "Show"} spoiler tags
            </p>
          </div>
        )}
        {links.length > 0 && (
          <div className="sidebar__links">
            <h3> External & Streaming links </h3>
            {links &&
              links.map((link, i) => (
                <a key={link.id} href={link.url}>
                  {link.site}
                </a>
              ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .sidebar {
          width: 100%;
          padding-bottom: 2rem;
        }

        .sidebar__rating {
          padding: 0.8rem 0 0.6rem 0;
          background-color: rgb(250, 250, 250);
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 0.85rem;
          border-radius: 0.2rem;
          min-height: 2.5rem;
          color: rgb(92, 114, 138);
        }

        .sidebar__rating p {
          margin: 0;
          font-smoothing: antialiased;
        }

        .sidebar__rating img {
          height: 0.7rem;
          margin: 0 0.8rem 0.1rem 0.8rem;
        }

        .sidebar__data {
          background-color: rgb(250, 250, 250);
          display: flex;
          flex-direction: column;
          padding: 1rem 0 0 1.2rem;
          border-radius: 0.2rem;
        }

        .sidebar__data h4 {
          margin: 0;
          font-weight: 600;
          font-size: 0.9rem;
          color: rgb(92, 114, 138);
          font-smoothing: antialiased;
        }

        .sidebar__data p {
          margin: 0 0 1rem 0;
          color: rgb(146, 153, 161);
          font-weight: 400;
          line-height: 1.3;
          max-width: 11rem;
          font-size: 0.85rem;
          color: rgb(146, 153, 161);
          font-smoothing: antialiased;
        }

        .capitalize {
          text-transform: capitalize;
        }

        .sidebar__tags {
          color: rgb(92, 114, 138);
        }

        .sidebar__tags h3 {
          font-size: 0.96rem;
          margin: 1.5rem 0 0.5rem 0;
        }

        .sidebar__tags__tag {
          width: 100%;
          height: 2rem;
          background-color: rgb(250, 250, 250);
          border-radius: 0.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.65rem;
          font-weight: 400;
          letter-spacing: 0rem;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
        }

        .sidebar__tags__show-spoilers {
          font-weight: 400;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .spoiler {
          color: rgb(232, 93, 117);
          font-weight: 600;
        }

        .spoiler-div {
          display: ${isSpoilerVisible ? "flex" : "none"};
        }

        .sidebar__links h3 {
          font-size: 0.96rem;
          margin: 1.5rem 0 0.5rem 0;
          color: rgb(92, 114, 138);
        }

        .sidebar__links a {
          width: 100%;
          height: 2rem;
          border-radius: 0.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(250, 250, 250);
          text-decoration: none;
          color: rgb(250, 250, 250);
          margin-bottom: 0.5rem;
        }

        .sidebar__links a:nth-child(5n + 1) {
          background-color: rgb(61, 180, 242);
        }

        .sidebar__links a:nth-child(5n + 2) {
          background-color: rgb(247, 154, 99);
        }

        .sidebar__links a:nth-child(5n + 3) {
          background-color: #c063ff;
        }

        .sidebar__links a:nth-child(5n + 4) {
          background-color: rgb(123, 213, 85);
        }

        .sidebar__links a:nth-child(5n + 5) {
          background-color: rgb(232, 93, 117);
        }

        @media screen and (max-width: 750px) {
          .sidebar__rating {
            display: none;
          }

          .sidebar__tags {
            display: none;
          }

          .sidebar__links {
            display: none;
          }

          .sidebar__data {
            display: flex;
            max-width: 30rem;
            max-height: 7rem;
            flex-direction: row;
            overflow-x: scroll;
            padding: 1rem 1rem 0;
          }

          .sidebar__data div {
            margin-right: 1.5rem;
          }
        }

        @media screen and (max-width: 500px) {
          .sidebar {
            display: flex;
            justify-content: center;
          }
          .sidebar__data {
            max-width: 20rem;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
