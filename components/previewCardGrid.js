const PreviewCard = ({ image, title }) => (
  <React.Fragment>
    <div className="preview-card">
      <div className="preview-card__title">
        <p>{title.toLowerCase().split("_").join(" ")}</p>
      </div>
    </div>
    <style jsx>{`
      .preview-card {
        background-image: url(${image});
        height: 8rem;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        width: 100%;
        align-items: flex-end;
        border-radius: 0.2rem;
      }

      .preview-card__title {
        width: 100%;
        background-color: rgba(31, 38, 49, 0.7);
        height: 2rem;
        display: flex;
        justify-content: center;
        place-items: center;
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
      }

      .preview-card__title p {
        font-size: 0.8rem;
        font-weight: 400;
        color: rgba(237, 241, 245, 0.91);
        text-transform: capitalize;
      }
    `}</style>
  </React.Fragment>
);

const PreviewCardGrid = ({ relations }) => (
  <>
    <div className="preview-card-grid">
      {relations &&
        relations.map((relation) => (
          <PreviewCard
            key={relation.id}
            image={relation.node.coverImage.medium}
            title={relation.relationType}
          />
        ))}
    </div>
    <style jsx>{`
      .preview-card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, 5.3rem);
        margin: 0.4rem 0 1.3rem 0;
        grid-gap: 1rem 1.65rem;
      }

      @media screen and (max-width: 1000px) {
        .preview-card-grid {
          grid-gap: 1rem 0.875rem;
        }
      }
    `}</style>
  </>
);

export default PreviewCardGrid;
