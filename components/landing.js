const Landing = () => (
  <>
    <div className="landing">
      <h1> The next-generation anime platform </h1>
      <h2>
        Track, share, and discover your favorite anime and manga with AniList.
      </h2>
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
      }
    `}</style>
  </>
);

export default Landing;
