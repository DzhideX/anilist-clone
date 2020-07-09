const GenreEllipse = ({ text }) => (
  <>
    <div className="genre-ellipse">
      <p> {text} </p>
    </div>
    <style jsx>{`
      .genre-ellipse {
        padding: 0 0.5rem;
        border: 0.05rem solid #26343f;
        border-radius: 1rem;
        margin-right: 0.38rem;
      }

      .genre-ellipse p {
        margin: 0;
        font-size: 0.8rem;
      }
    `}</style>
  </>
);

export default GenreEllipse;
