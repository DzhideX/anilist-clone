const animeQuery = async (id) => {
  const query = `
    {
        Media(id:${id} ,type: ANIME) {
          id
          bannerImage
          description(asHtml:true)
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
