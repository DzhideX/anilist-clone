const refactorAnimeData = (animeInfo) => {
  let newDesc = "";
  let studios = [];
  let producers = [];
  if (animeInfo.data.Media) {
    animeInfo.data.Media.description.split("<br />").forEach((part, i) => {
      if (i % 2 === 0) {
        newDesc += `<p>${part}<p/>`;
      }
    });
    animeInfo.data.Media.description = newDesc;
  }
  animeInfo.data.Media?.studios.edges.map((studio) => {
    if (studio.node.isAnimationStudio) {
      studios.push(studio.node.name);
    } else {
      producers.push(studio.node.name);
    }
  });
  return {
    data: animeInfo.data.Media,
    studios,
    producers,
  };
};

export default refactorAnimeData;
