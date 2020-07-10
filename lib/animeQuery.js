const animeQuery = async (numOfResults, queryInfo) => {
  const query = `
    {
        Page(page: 1, perPage: ${numOfResults}) {
          media(type: ANIME, ${queryInfo}) {
            id
            coverImage {
              extraLarge
              large
              medium
              color
            }
            title {
              english
              romaji
              native
            }
            genres
            meanScore
            popularity
            format
            episodes
            season
            seasonYear
            status
          }
        }
      }
    `;

  const url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    };

  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => data);
};

export default animeQuery;
