const Footer = () => (
  <>
    <div className="footer">
      <div className="footer__center">
        <div className="footer__center__left">
          <h3> Site Theme </h3>
          <div className="footer__center__left__switches">
            <div className="footer__center__left__switches__switch">
              {" "}
              <p>A</p>{" "}
            </div>
            <div className="footer__center__left__switches__switch">
              {" "}
              <p>A</p>{" "}
            </div>
            <div className="footer__center__left__switches__switch">
              {" "}
              <p>A</p>{" "}
            </div>
          </div>
        </div>
        <div className="footer__center__right">
          <div className="footer__center__right__column">
            <a>AniList.co</a>
            <a>AniChart.net</a>
          </div>
          <div className="footer__center__right__column">
            <a>Apps</a>
            <a>Site Stats</a>
            <a>Recommendations</a>
            <a>API</a>
          </div>
          <div className="footer__center__right__column">
            <a>Discord</a>
            <a>Twitter</a>
            <a>Facebook</a>
            <a>GitHub</a>
          </div>
          <div className="footer__center__right__column">
            <a>Add Data</a>
            <a>Contact</a>
            <a>Terms & Privacy</a>
            <a>Site Map</a>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer {
        height: 16rem;
        width: 100%;
        background-color: #10151c;
      }

      .footer__center {
        height: 100%;
        width: 70vw;
        margin: 0 auto;
        display: flex;
      }

      .footer__center__left {
        height: 100%;
        width: 45%;
      }

      .footer__center__left h3 {
        margin-top: 2.5rem;
        margin-left: 1rem;
        color: #3db4f2;
      }

      .footer__center__left__switches {
        display: flex;
        flex-direction: row;
        margin-left: 1rem;
      }

      .footer__center__left__switches div:nth-of-type(1) {
        color: #2e3c48;
      }

      .footer__center__left__switches div:nth-of-type(2) {
        color: #a0b1c5;
        background-color: #11161d;
      }

      .footer__center__left__switches__switch {
        height: 1.7rem;
        width: 1.7rem;
        margin-right: 0.8rem;
        background-color: white;
        border-radius: 0.2rem;
        border: 0.1rem solid #46546b;
        cursor: pointer;
      }

      .footer__center__left__switches__switch p {
        margin: 0.3rem 0 0 0.2rem;
        font-size: 1.1rem;
        font-weight: 400;
      }

      .footer__center__right {
        height: 100%;
        width: 55%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      .footer__center__right__column {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding-top: 2.5rem;
        padding-left: 1.8rem;
      }

      .footer__center__right__column a {
        color: #8a99aa;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        margin-top: 1rem;
      }

      .footer__center__right__column a:hover {
        color: #105f8a;
      }

      @media screen and (max-width: 1500px) {
        .footer__center {
          width: 70rem;
        }
      }

      @media screen and (max-width: 1160px) {
        .footer__center__left {
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer__center__left h3 {
          margin-left: -1rem;
        }

        .footer__center__left__switches {
          width: 8rem;
        }

        .footer__center__right {
          width: 75%;
        }
      }

      @media screen and (max-width: 1050px) {
        .footer {
          height: 100%;
          padding-bottom: 1rem;
        }
        .footer__center {
          flex-direction: column;
          width: 100%;
        }

        .footer__center__right {
          display: flex;
          flex-direction: column;
        }

        .footer__center__left {
          width: 100%;
          align-items: flex-start;
          padding-left: 1rem;
        }

        .footer__center__left h3 {
          margin-left: 1rem;
        }

        .footer__center__right__column {
          padding-top: 1.5rem;
          padding-left: 1.8rem;
        }

        .footer__center__right__column a {
          margin-top: 0.5rem;
        }
      }
    `}</style>
  </>
);

export default Footer;
