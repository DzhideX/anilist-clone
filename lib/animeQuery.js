const animeQuery = async (id) => {
  const query = `
  {
    Media(id:${id}, type: ANIME) {
    reviews {
      edges {
        node{
          id
          summary
          rating
          user {
            id
            avatar {
              large
              medium
            }
          }
        }
      }
    }
    trailer {
      id
      site
    }
    recommendations {
      edges {
        node {
          id
          mediaRecommendation {
            title {
              romaji
            }
            coverImage {
              extraLarge
              large
              medium
              color
            }
          }
        }
      }
    }
    	streamingEpisodes {
    	  title
    	  thumbnail
    	  url
    	  site
    	}
      stats{
        scoreDistribution {
          score
          amount
        }
        statusDistribution {
          status
          amount
        }
      }
      staff {
        edges{
          node {
            image {
              large
              medium
            }
            name {
              first
              last
              full
              native
            }
            id
          }
          role
          id
        }
      }
      characters(sort: ID){
        edges {
          voiceActors(language:JAPANESE){
            image {
              medium
            }
            language
            name {
              full
              native
            }
            id
          }
          role
          node {
            image {
              medium
            }
            name {
              first
              last
              full
              native
            }
            id
          }
          id
        }
      }
      id
      bannerImage
      description(asHtml: true)
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
      relations {
        edges {
          relationType
          node {
            coverImage {
              extraLarge
              large
              medium
              color
            }
            title {
              romaji
              english
              native
              userPreferred
            }
            id
          }
          id
        }
      }
      genres
      meanScore
      averageScore
      popularity
      format
      episodes
      duration
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      status
      hashtag
      studios {
        edges {
          node {
            id
            name
            isAnimationStudio
          }
        }
      }
      source
      synonyms
      favourites
      tags {
        name
        isMediaSpoiler
        id
        rank
      }
      externalLinks {
        id
        site
        url
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
