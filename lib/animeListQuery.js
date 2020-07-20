const animeListQuery = async (numOfResults, queryInfo) => {
  const query = `
  {
    topScore: Page(page: 1, perPage: 10) {
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
    mostPopular: Page(page: 1, perPage: 6) {
      media(type: ANIME, sort: POPULARITY_DESC) {
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
  mostPopularThisSeason: Page(page: 1, perPage: 6) {
      media(type: ANIME, sort: POPULARITY_DESC, season: SUMMER, seasonYear: 2020) {
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
  mostPopularNextSeason: Page(page: 1, perPage: 6) {
      media(type: ANIME, sort: POPULARITY_DESC, season: FALL, seasonYear: 2020) {
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
  trendingNow: Page(page: 1, perPage: 6) {
      media(type: ANIME, sort: TRENDING_DESC) {
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

export default animeListQuery;
