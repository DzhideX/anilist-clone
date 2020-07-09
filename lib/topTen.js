const topTen = async () => {
  const query = `
    {
        Page(page: 1, perPage: 10) {
          media(type: ANIME, sort: SCORE_DESC) {
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

export default topTen;
