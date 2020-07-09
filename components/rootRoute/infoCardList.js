import InfoCard from "../infoCard";

const InfoCardList = () => (
  <>
    <div className="info-card-list">
      <div className="info-card-list__info">
        <h3>TOP 100 ANIME</h3>
        <p> View All</p>
      </div>
      <InfoCard />
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

export default InfoCardList;
