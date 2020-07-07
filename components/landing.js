import FeatureCard from "./featureCard";

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
      <button>Join Now</button>
    </div>
    <style jsx>{`
      .landing {
        width: 72.5rem;
        height: 42rem;
        background-color: #091523;
        margin: 3rem auto;
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

      button {
        position: relative;
        font-family: Overpass;
        align-items: center;
        background: #3577ff;
        border-radius: 1.875rem;
        box-shadow: 0 2px 40px rgba(0, 0, 0, 0.4);
        min-height: 3.0625rem;
        width: 12.5rem;
        margin-top: 4.3rem;
        transition: box-shadow 0.4s ease;
        border: none;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 700;
        color: #f7fafc;
        cursor: pointer;
      }

      button:hover {
        box-shadow: 0 2px 43px rgba(8, 150, 230, 0.6);
      }
    `}</style>
  </>
);

export default Landing;
