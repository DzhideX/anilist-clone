const GenreEllipse = ({ text, color }) => (
  <>
    <div className="genre-ellipse">
      <p> {text} </p>
    </div>
    <style jsx>{`
      .genre-ellipse {
        padding: 0 0.5rem;
        background-color: ${color};
        border-radius: 1rem;
        margin-right: 0.38rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .genre-ellipse p {
        color: white;
        margin: 0;
        font-size: 0.8rem;
        padding-top: 0.1rem;
      }
    `}</style>
  </>
);

export default GenreEllipse;
