import PreviewCardGrid from "../previewCardGrid";
import CharacterCardGrid from "../characterCardGrid";
import DataDistribution from "./dataDistribution";

const Overview = ({ relations, characters, staff, stats }) => (
  <>
    <div className="overview">
      <h2>Relations</h2>
      <PreviewCardGrid relations={relations} />
      <h2> Characters </h2>
      <CharacterCardGrid characters={characters} />
      <h2>Staff</h2>
      <CharacterCardGrid staff={staff} />
      <div className="overview__data-distribution">
        <div>
          <h2>Status Distribution</h2>
          <DataDistribution
            distribution={{ type: "STATUS", array: stats.statusDistribution }}
          />
        </div>
        <div>
          <h2>Status Distribution</h2>
          <DataDistribution
            distribution={{ type: "STATUS", array: stats.statusDistribution }}
          />
        </div>
      </div>
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
        font-smooth: antialiased;
      }

      .overview__data-distribution {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
      }
    `}</style>
  </>
);

export default Overview;
