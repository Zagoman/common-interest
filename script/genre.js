const urlParams = new URLSearchParams(window.location.search);
const genre = urlParams.get("genre");
const urlGenre = `https://mmdzag-2550.restdb.io/rest/genres?q={"name": "${genre}"}`;
const urlMovies = `https://mmdzag-2550.restdb.io/rest/movies?max=50`;
const options = {
  headers: {
    "x-apikey": "620cea5934fd621565858662",
  },
};
fetch(urlGenre, options)
  .then((res) => res.json())
  .then((data) => showGenre(data));
fetch(urlMovies, options)
  .then((res) => res.json())
  .then((data) => data.forEach((el) => sortMovies(el)));
document.querySelector("title").textContent = genre;
const moviesParent = document.querySelector(".movies");
const genreParent = document.querySelector(".hero__genre");
const genreTemp = document.querySelector("#genre__temp").content;
const movieTemp = document.querySelector("#movies__temp").content;

const showGenre = (el) => {
  console.log(el);
  const clone = genreTemp.cloneNode(true);
  clone.querySelector("h1").textContent = el[0].name;
  clone.querySelector("p").textContent = el[0].description;
  clone.querySelector("img").src = el[0].imgs;
  clone.querySelector("img").alt = `${el[0].name} image`;

  genreParent.append(clone);
};

const sortMovies = (el) => {
  el.genres.forEach((item) => {
    // console.log(genre);
    if (item.name == genre) {
      showMovies(el);
    }
  });
};

const showMovies = (el) => {
  const clone = movieTemp.cloneNode(true);
  clone.querySelector("a").href = `./movie.html?movie=${el.title}`;
  clone.querySelector("a h3").textContent = el.title;
  clone.querySelector("a p:nth-child(2)").textContent = el.shortDescription;
  clone.querySelector("a p:nth-child(3)").textContent = el.directors;
  clone.querySelector("a > img").src = el.images.mainImg;
  clone.querySelector("a > img").alt = `${el.title} poster`;
  clone.querySelector("a span p").textContent = el.userRatings;

  moviesParent.append(clone);
};
