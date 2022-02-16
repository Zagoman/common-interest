const urlParams = new URLSearchParams(window.location.search);
const movie = urlParams.get("movie");
const url = `https://mmdzag-2550.restdb.io/rest/movies?q={"title": "${movie}"}`;

const options = {
  headers: {
    "x-apikey": "620cea5934fd621565858662",
  },
};
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showMovie(data));

const showMovie = (el) => {
  console.log(el[0]);
};
