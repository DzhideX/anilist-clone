const CharacterCard = ({
  characterName,
  characterRole,
  characterImage,
  staffName,
  staffLanguage,
  staffImage,
}) => (
  <React.Fragment>
    <div className="character-card">
      <div className="character-card__left">
        <img className="image-left" src={characterImage} />
        <div>
          <p id="name">{characterName}</p>
          <p id="info">{characterRole.toLowerCase()}</p>
        </div>
      </div>
      {staffName && staffLanguage && staffImage && (
        <div className="character-card__right">
          <div>
            <p id="name">{staffName}</p>
            <p id="info">{staffLanguage.toLowerCase()}</p>
          </div>
          <img className="image-right" src={staffImage} />
        </div>
      )}
    </div>
    <style jsx>{`
      .character-card {
        display: flex;
        justify-content: space-between;
        background-color: rgb(250, 250, 250);
        border-radius: 0.2rem;
      }

      .character-card img {
        height: 5rem;
        width: 3.6rem;
      }

      .image-left {
        border-bottom-left-radius: 0.2rem;
        border-top-left-radius: 0.2rem;
      }
      .image-right {
        border-bottom-right-radius: 0.2rem;
        border-top-right-radius: 0.2rem;
      }

      .character-card__left {
        display: flex;
      }

      .character-card__right {
        display: flex;
      }

      .character-card__left div {
        padding: 0.6rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .character-card__left div p,
      .character-card__right div p {
        margin: 0;
        font-size: 0.85rem;
        text-transform: capitalize;
      }

      .character-card__right div p {
        text-align: right;
      }

      .character-card__right div {
        padding: 0.6rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
      }

      #name {
        color: rgb(92, 114, 138);
        font-weight: 400;
        display: inline;
      }

      #info {
        color: rgb(146, 153, 161);
        font-weight: 400;
        font-size: 0.7rem;
      }
    `}</style>
  </React.Fragment>
);

const CharacterCardGrid = (props) => (
  <>
    <div className="character-grid">
      {props.characters &&
        props.characters.edges.map(
          (character, i) =>
            i <= 5 && (
              <CharacterCard
                key={character.id}
                characterName={character.node.name.full}
                characterRole={character.role}
                characterImage={character.node.image.medium}
                staffName={character.voiceActors[0].name.full}
                staffLanguage={character.voiceActors[0].language}
                staffImage={character.voiceActors[0].image.medium}
              />
            )
        )}
      {props.staff &&
        props.staff.map(
          (person, i) =>
            i <= 2 && (
              <CharacterCard
                key={person.id}
                characterName={person.node.name.full}
                characterRole={person.role}
                characterImage={person.node.image.medium}
              />
            )
        )}
    </div>
    <style jsx>{`
      .character-grid {
        display: grid;
        grid-column-gap: 1.8rem;
        grid-row-gap: 0.9rem;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 1rem;
      }

      @media screen and (max-width: 1350px) {
        .character-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media screen and (max-width: 1150px) {
        .character-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </>
);

export default CharacterCardGrid;
