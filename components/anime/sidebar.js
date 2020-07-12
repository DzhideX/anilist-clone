const Sidebar = ({
  title,
  format,
  episodes,
  status,
  season,
  seasonYear,
  meanScore,
  popularity,
}) => (
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
        <h4>Format</h4>
        <p>{format}</p>
        <h4>Episodes</h4>
        <p>{episodes}</p>
        <h4>Status</h4>
        <p>{status.toLowerCase()}</p>
        <h4>Season</h4>
        <p>{season.toLowerCase() + " " + seasonYear}</p>
        <h4>Mean Score</h4>
        <p>{meanScore}</p>
        <h4>Popularity</h4>
        <p>{popularity}</p>
      </div>
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
        color: #677a8e;
      }

      .sidebar__data p {
        margin: 0 0 1rem 0;
        color: rgb(146, 153, 161);
        font-weight: 400;
        text-transform: capitalize;
      }
    `}</style>
  </>
);

export default Sidebar;
