const url = "https://mmdzag-2550.restdb.io/rest/movies?max=50";
const options = {
  headers: {
    "x-apikey": "620cea5934fd621565858662",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => data.forEach((el) => showMovies(el)));

const moviesParent = document.querySelector(".movies");
const movieTemp = document.querySelector("#movies__temp").content;

const showMovies = (el) => {
  const clone = movieTemp.cloneNode(true);
  clone.querySelector("a").href = `./movie.html?movie=${el.title}`;
  clone.querySelector("a h3").textContent = el.title;
  clone.querySelector("a p:nth-child(2)").textContent = el.shortDescription;
  clone.querySelector("a p:nth-child(3)").textContent = el.directors;
  clone.querySelector("a img").src = el.images.mainImg;
  clone.querySelector("a span p").textContent = el.userRatings;

  moviesParent.append(clone);
};
