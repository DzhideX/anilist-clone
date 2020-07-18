import { useState } from "react";

const calculateScoreDistributionRatio = (array, score) =>
  (array.filter((stat, i) => stat.score === score)[0].amount /
    array.reduce((sum, item) => sum + item.amount, 0)) *
  10;

const ScoreDistribution = ({ distribution }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="score-distribution"
      >
        {distribution &&
          distribution.map((stat) => (
            <div key={stat.score} className="score-distribution__score">
              <div
                style={{ visibility: isHovered ? "visible" : "hidden" }}
                className="score-distribution__score__upper-text"
              >
                {stat.amount}
              </div>
              <div
                style={{
                  height: `${calculateScoreDistributionRatio(
                    distribution,
                    stat.score
                  )}rem`,
                }}
                className={`score-distribution__score__line line${stat.score}`}
              ></div>
              <div
                style={{ visibility: isHovered ? "visible" : "hidden" }}
                className="score-distribution__score__lower-text"
              >
                {stat.score}
              </div>
            </div>
          ))}
      </div>
      <style jsx>{`
        .score-distribution {
          height: 6.7rem;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          background-color: rgb(250, 250, 250);
          margin-bottom: 1rem;
        }

        .score-distribution__score {
          height: 100%;
          width: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 0.5rem 0.2rem 0.2rem;
        }

        .score-distribution__score__line {
          height: 100%;
          width: 0.9rem;
          min-height: 1rem;
          background-color: blue;
          border-radius: 1rem;
          margin-bottom: 0.3rem;
        }

        .score-distribution__score__lower-text {
          color: #abc2da;
          font-size: 0.7rem;
          font-weight: 400;
        }

        .score-distribution__score__upper-text {
          font-size: 0.73rem;
          color: #6d7e92;
          font-weight: 600;
        }

        .line10 {
          background-color: rgb(199, 68, 43);
        }

        .line20 {
          background-color: rgb(199, 95, 43);
        }

        .line30 {
          background-color: rgb(199, 122, 43);
        }

        .line40 {
          background-color: rgb(199, 147, 43);
        }

        .line50 {
          background-color: rgb(199, 174, 43);
        }

        .line60 {
          background-color: rgb(199, 199, 43);
        }

        .line70 {
          background-color: rgb(174, 199, 43);
        }

        .line80 {
          background-color: rgb(147, 199, 43);
        }

        .line90 {
          background-color: rgb(122, 199, 43);
        }

        .line100 {
          background-color: rgb(95, 199, 43);
        }
      `}</style>
    </>
  );
};

export default ScoreDistribution;
