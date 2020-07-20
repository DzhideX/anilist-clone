import FeatureCard from "../featureCard";

const Landing = () => (
  <>
    <div className="landing">
      <h1> The next-generation anime platform </h1>
      <h2>
        Track, share, and discover your favorite anime and manga with AniList.
      </h2>
      <div className="landing__feature-cards">
        <FeatureCard
          image="stats"
          title="Discover your obsessions"
          description=" What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics. "
        />
        <FeatureCard
          image="apps"
          title="Bring AniList anywhere"
          description=" Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows."
        />
        <FeatureCard
          image="social"
          title="Join the conversation"
          description="Share your thoughts with our thriving community, make friends, socialize, and receive recommendations."
        />
        <FeatureCard
          image="custom"
          title="Tweak it to your liking"
          description="Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode."
        />
      </div>
      <div className="landing__button">
        <p>Join Now</p>
        <div className="landing__button__circle">
          <img
            className="landing__button__circle__arrow"
            src="/images/arrow.svg"
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .landing {
        width: 72.5rem;
        height: 42rem;
        background-color: #091523;
        margin: 7.5rem auto 3rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        color: white;
        margin: 4rem 0 0 0;
        font-size: 2.1rem;
      }

      h2 {
        color: #acd5f2;
        width: 27rem;
        text-align: center;
        font-weight: 400;
        margin-bottom: 4.5rem;
      }

      .landing__feature-cards {
        display: grid;
        grid-gap: 4.375rem 3.75rem;
        grid-template-columns: repeat(2, minmax(18rem, 28rem));
        justify-content: center;
      }

      .landing__button {
        font-family: Overpass;
        background: #3577ff;
        border-radius: 1.875rem;
        box-shadow: 0 2px 40px rgba(0, 0, 0, 0.4);
        min-height: 3.0625rem;
        width: 12.5rem;
        margin-top: 4.3rem;
        transition: box-shadow 0.4s ease;
        border: none;
        font-size: 1.2rem;
        font-weight: 700;
        color: #f7fafc;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      }

      .landing__button:hover {
        box-shadow: 0 2px 43px rgba(8, 150, 230, 0.6);
      }

      .landing__button p {
        padding-top: 0.2rem;
        margin-left: 2rem;
        margin-right: 1rem;
      }

      .landing__button__circle {
        background-color: #d9e6ff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.3rem;
        width: 2.3rem;
        border-radius: 1.5rem;
        padding-left: 0.2rem;
      }

      .landing__button__circle__arrow {
        height: 1.25rem;
      }

      @media screen and (max-width: 1160px) {
        .landing {
          width: 100%;
          margin: 0;
          border-radius: 0;
        }

        .landing__feature-cards {
          grid-gap: 2rem 2rem;
        }
        .landing__button {
          height: 2rem;
          width: 11rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .landing__button__circle {
          height: 2rem;
          width: 2rem;
          margin-right: 0.5rem;
        }
      }

      @media screen and (max-width: 900px) {
        .landing {
          height: 100%;
        }

        .landing__feature-cards {
          display: flex;
          flex-direction: column;
        }
      }

      @media screen and (max-width: 650px) {
        h1 {
          text-align: center;
          width: 31.5rem;
        }
        .landing__feature-cards {
          width: 30rem;
        }
      }

      @media screen and (max-width: 500px) {
        h1 {
          text-align: center;
          width: 20rem;
          font-size: 1.5rem;
        }
        h2 {
          width: 20rem;
          font-size: 1rem;
          margin-bottom: 2rem;
          margin-top: 2rem;
        }
        .landing__feature-cards {
          width: 20rem;
          align-items: center;
        }

        .landing__button {
          min-height: 2rem;
          height: 2.3rem;
          width: 8rem;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }

        .landing__button p {
          font-size: 0.9rem;
          margin: 0rem 1rem;
        }

        .landing__button__circle {
          height: 1.5rem;
          width: 1.5rem;
          margin-right: 0.5rem;
        }

        .landing__button__circle__arrow {
          height: 0.85rem;
        }
      }
    `}</style>
  </>
);

export default Landing;
