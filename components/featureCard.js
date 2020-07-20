const FeatureCard = ({ image, title, description }) => (
  <>
    <div className="landing__feature-card">
      <img
        src={`/images/${image}.svg`}
        className="landing__feature-card__image"
      />
      <div className="landing__feature-card__info">
        <h3 className="landing__feature-card__info__title">{title}</h3>
        <p className="landing__feature-card__info__description">
          {description}
        </p>
      </div>
    </div>
    <style jsx>{`
      .landing__feature-card {
        display: flex;
        align-items: center;
      }

      .landing__feature-card__image {
        height: 6rem;
      }

      .landing__feature-card__info {
        margin-left: 2rem;
      }

      .landing__feature-card__info__title {
        color: #ecf6fe;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      .landing__feature-card__info__description {
        color: #acd5f2;
        font-weight: 500;
        font-size: 0.9rem;
        margin-top: 0rem;
        line-height: 146%;
      }

      @media screen and (max-width: 900px) {
        .landing__feature-card {
          width: 35rem;
        }
      }
      @media screen and (max-width: 650px) {
        .landing__feature-card {
          width: 30rem;
        }
      }

      @media screen and (max-width: 500px) {
        .landing__feature-card {
          width: 18rem;
        }

        .landing__feature-card img {
          height: 3rem;
        }

        .landing__feature-card__info {
          margin-left: 1rem;
        }

        .landing__feature-card__info h3 {
          font-size: 1rem;
        }

        .landing__feature-card__info p {
          font-size: 0.7rem;
        }
      }
    `}</style>
  </>
);

export default FeatureCard;
