import PreviewCardGrid from "../previewCardGrid";

const Overview = ({ relations }) => (
  <>
    <div className="overview">
      <h2>Relations</h2>
      <PreviewCardGrid relations={relations} />
    </div>
    <style jsx>{`
      .overview {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      h2 {
        font-size: 0.95rem;
        font-weight: 600;
        color: rgb(92, 114, 138);
        margin: 0 0 0.5rem 0;
      }
    `}</style>
  </>
);

export default Overview;
