const Filter = ({ title, search }) => (
  <>
    <div className="filter">
      <p>{title}</p>
      <div className="filter__bottom">
        {search ? (
          <img className="filter__bottom__search" src="/images/search.svg" />
        ) : (
          <img className="filter__bottom__arrow" src="/images/arrowdown.svg" />
        )}
        {search ? (
          <input className="filter__bottom__input" type="text" />
        ) : (
          <input
            placeholder="Any"
            className="filter__bottom__input__select"
            type="text"
          />
        )}
      </div>
    </div>
    <style jsx>{`
      --filter-size: 11.5rem;

      .filter {
        margin-left: 2rem;
        width: var(--filter-size);
      }

      .filter p {
        font-size: 1rem;
        font-weight: 600;
        color: rgb(38, 52, 63);
        margin-bottom: 0.6rem;
      }

      .filter__bottom {
        display: flex;
        align-items: center;
        width: var(--filter-size);
      }

      .filter__bottom__search {
        height: 0.9rem;
        position: absolute;
        margin-left: 0.7rem;
      }

      .filter__bottom__arrow {
        height: 0.9rem;
        position: absolute;
        margin-top: 0.1rem;
        margin-left: 9.7rem;
      }

      .filter__bottom__input {
        height: 2.5rem;
        width: var(--filter-size);
        border: none;
        padding: 0.5rem 2.2rem;
        border-radius: 0.3rem;
      }

      .filter__bottom__input__select {
        height: 2.5rem;
        width: var(--filter-size);
        border: none;
        padding: 0.5rem 2.3rem 0.5rem 1rem;
        border-radius: 0.3rem;
      }
      .filter__bottom__input__select::placeholder {
        font-weight: 600;
      }

      input:focus {
        outline: none;
      }
    `}</style>
  </>
);

export default Filter;
