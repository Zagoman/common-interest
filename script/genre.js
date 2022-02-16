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
  .then((data) => data.forEach((el) => showGenre(el)));
fetch(urlMovies, options)
  .then((res) => res.json())
  .then((data) => data.forEach((el) => sortMovies(el)));

const showGenre = (el) => {};
const arr = [];
const sortMovies = (el) => {
  el.genres.forEach((item) => arr.push(item));
  //   if () {}
};
const showMovies = (el) => {
  el.genres.forEach((item) => console.log(item.name));
};
