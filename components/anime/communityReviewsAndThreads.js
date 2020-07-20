const CommunityReviewsAndThreads = ({ reviews }) => (
  <>
    <div className="community">
      <div className="community__reviews">
        <h2>Reviews</h2>
        {reviews.map(
          (review, i) =>
            i < 2 && (
              <div className="community__reviews__item">
                <img src={review.node.user.avatar.medium} />
                <div className="community__reviews__item__textbox">
                  <em>
                    <p>{review.node.summary}</p>
                  </em>
                  <div className="community__reviews__item__textbox__votes">
                    <img src="/images/upvote.svg" />
                    <p>{review.node.rating}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
    <style jsx>{`
      .community {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 13.75rem;
        grid-gap: 2rem;
        margin-top: 1.5rem;
        position: relative;
      }

      h2 {
        font-size: 0.95rem;
        font-weight: 600;
        color: rgb(92, 114, 138);
        margin: 0 0 0.5rem 0;
      }

      .community__reviews__item {
        display: flex;
        flex-direction: row;
        height: 3.75rem;
        margin-bottom: 1rem;
      }

      .community__reviews__item img {
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 0.2rem;
      }

      .community__reviews__item__textbox {
        height: 100%;
        width: 100%;
        margin-left: 1.5rem;
        border-radius: 0.2rem;
        background-color: rgb(250, 250, 250);
        color: rgba(92, 114, 138, 0.9);
        font-size: 0.98rem;
        font-weight: 400;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .community__reviews__item__textbox p {
        text-align: center;
        font-size: 0.9rem;
      }

      .community__reviews__item__textbox:hover {
        box-shadow: 0 2px 20px 0 rgba(6, 13, 34, 0.05);
      }

      .community__reviews__item__textbox__votes {
        position: absolute;
        margin-left: 26rem;
        margin-top: 2rem;
        display: flex;
      }

      .community__reviews__item__textbox__votes p {
        margin: 0 0 0 0.3rem;
        font-size: 0.85rem;
      }

      .community__reviews__item__textbox__votes img {
        height: 0.8rem;
        width: 0.8rem;
      }

      @media screen and (max-width: 1350px) {
        .community {
          display: flex;
          justify-content: center;
        }

        .community__reviews__item__textbox__votes {
          margin-left: 19rem;
        }
      }

      @media screen and (max-width: 500px) {
        .community__reviews__item__textbox__votes {
          margin-left: 12rem;
        }
      }
    `}</style>
  </>
);

export default CommunityReviewsAndThreads;
