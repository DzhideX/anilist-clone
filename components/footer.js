const Footer = () => (
  <>
    <div className="footer">
      <div className="footer__center">
        <div className="footer__center__left">
          <h3> Site Theme </h3>
          <div className="footer__center__left__switches">
            <div className="footer__center__left__switches__switch"> </div>
          </div>
        </div>
        <div className="footer__center__right"></div>
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
        background-color: green;
        height: 100%;
        width: 50%;
      }

      .footer__center__left h3 {
        margin-top: 2.5rem;
        margin-left: 1rem;
      }

      .footer__center__right {
        background-color: black;
        height: 100%;
        width: 50%;
      }
    `}</style>
  </>
);

export default Footer;
