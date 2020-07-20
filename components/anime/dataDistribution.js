const calculateWidth = (array, status) =>
  (array.filter((stat, i) => stat.status === status)[0].amount /
    array.reduce((sum, item) => sum + item.amount, 0)) *
  100;

const DataDistribution = ({ distribution }) => {
  return (
    <>
      <div className="data-distribution">
        <div className="data-distribution__text">
          <div className="data-distribution__text__button completed">
            <div>
              <p>Completed</p>
            </div>
            <p>
              <span className="completed">
                {distribution &&
                  distribution.filter(
                    (stat, i) => stat.status === "COMPLETED"
                  )[0].amount + " "}
              </span>
              Users
            </p>
          </div>
          <div className="data-distribution__text__button planning">
            <div>
              <p>Planning</p>
            </div>
            <p>
              <span className="planning">
                {distribution &&
                  distribution.filter(
                    (stat, i) => stat.status === "PLANNING"
                  )[0].amount + " "}
              </span>
              Users
            </p>
          </div>
          <div className="data-distribution__text__button current">
            <div>
              <p>Current</p>
            </div>
            <p>
              <span className="current">
                {distribution &&
                  distribution.filter((stat, i) => stat.status === "CURRENT")[0]
                    .amount + " "}
              </span>
              Users
            </p>
          </div>
          <div className="data-distribution__text__button paused">
            <div>
              <p>Paused</p>
            </div>
            <p>
              <span>
                {distribution && (
                  <span className="paused">
                    {distribution.filter(
                      (stat, i) => stat.status === "PAUSED"
                    )[0].amount + " "}
                  </span>
                )}
              </span>
              Users
            </p>
          </div>
          <div className="data-distribution__text__button dropped">
            <div>
              <p>Dropped</p>
            </div>
            <p>
              <span className="dropped">
                {distribution &&
                  distribution.filter((stat, i) => stat.status === "DROPPED")[0]
                    .amount + " "}
              </span>
              users
            </p>
          </div>
        </div>
        <div className="data-distribution__line">
          <div
            style={{
              width: `${calculateWidth(distribution, "COMPLETED")}%`,
            }}
            className="data-distribution__line__completed"
          ></div>
          <div
            style={{
              width: `${calculateWidth(distribution, "PLANNING")}%`,
            }}
            className="data-distribution__line__planning"
          ></div>
          <div
            style={{
              width: `${calculateWidth(distribution, "CURRENT")}%`,
            }}
            className="data-distribution__line__current"
          ></div>
          <div
            style={{
              width: `${calculateWidth(distribution, "PAUSED")}%`,
            }}
            className="data-distribution__line__paused"
          ></div>
          <div
            style={{
              width: `${calculateWidth(distribution, "DROPPED")}%`,
            }}
            className="data-distribution__line__dropped"
          ></div>
        </div>
      </div>
      <style jsx>{`
        .data-distribution {
          height: 6.7rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background-color: rgb(250, 250, 250);
          margin-bottom: 1rem;
        }

        .data-distribution__text {
          width: 100%;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          padding: 0 1rem;
        }

        .data-distribution__text__button {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .data-distribution__text__button div {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.2rem 0.6rem;
          border-radius: 0.2rem;
        }

        .data-distribution__text__button div p {
          margin: 0;
          color: rgb(250, 250, 250);
        }

        .data-distribution__text__button > p {
          margin: 0.5rem 0 0 0;
          font-size: 0.8rem;
          font-weight: 200;
        }

        .data-distribution__text__button > p > span {
          font-weight: 400;
        }

        .completed div {
          background-color: rgb(104, 214, 57);
        }

        span.completed {
          color: rgb(104, 214, 57);
        }

        .planning div {
          background-color: rgb(2, 169, 255);
        }

        span.planning {
          color: rgb(2, 169, 255);
        }

        .current div {
          background-color: rgb(146, 86, 243);
        }

        span.current {
          color: rgb(146, 86, 243);
        }

        .paused div {
          background-color: rgb(247, 121, 164);
        }

        span.paused {
          color: rgb(247, 121, 164);
        }

        .dropped div {
          background-color: rgb(232, 93, 117);
        }

        span.dropped {
          color: rgb(232, 93, 117);
        }

        .data-distribution__line {
          height: 0.8rem;
          width: 100%;
          align-self: flex-end;
          background-color: red;
          border-bottom-left-radius: 0.2rem;
          border-bottom-right-radius: 0.2rem;
          display: flex;
        }

        .data-distribution__line__completed {
          height: 100%;
          background-color: rgb(104, 214, 57);
        }

        .data-distribution__line__planning {
          height: 100%;
          background-color: rgb(2, 169, 255);
        }

        .data-distribution__line__current {
          height: 100%;
          background-color: rgb(146, 86, 243);
        }

        .data-distribution__line__paused {
          height: 100%;
          background-color: rgb(247, 121, 164);
        }

        .data-distribution__line__dropped {
          height: 100%;
          background-color: rgb(232, 93, 117);
        }

        @media screen and (max-width: 500px) {
          .overview {
            width: 20rem;
          }

          .data-distribution__text div:nth-of-type(5) {
            display: none;
          }

          .data-distribution__text div:nth-of-type(4) {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default DataDistribution;
