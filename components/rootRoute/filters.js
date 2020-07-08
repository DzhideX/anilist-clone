import Filter from "../filter";
import { Settings } from "../logos";
import { useState } from "react";

const Filters = ({}) => {
  const [color, setColor] = useState("#6E8191");

  return (
    <>
      <div className="filters">
        <Filter title="Search" search={true} />
        <Filter title="Genres" search={false} />
        <Filter title="Year" search={false} />
        <Filter title="Season" search={false} />
        <Filter title="Format" search={false} />
        <Filter title="Airing Status" search={false} />
        <div
          onMouseEnter={() => setColor("#69BEF2")}
          onMouseLeave={() => setColor("#6E8191")}
          className="filters__settings"
        >
          <Settings color={color} size="1.2rem" />
        </div>
      </div>
      <style jsx>{`
        .filters {
          width: 90rem;
          display: flex;
          margin: 0 auto;
          margin-top: 4rem;
          margin-bottom: 2rem;
          justify-content: space-between;
        }

        .filters__settings {
          background-color: white;
          height: 2.5rem;
          width: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: flex-end;
          margin-left: 4rem;
          border-radius: 0.5rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Filters;
