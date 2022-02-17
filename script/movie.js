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

document.querySelector("title").textContent = movie;
const heroTemp = document.querySelector("#movie-hero").content;
const descTemp = document.querySelector("#movie-desc").content;
const heroParent = document.querySelector(".hero__movie");
const descParent = document.querySelector(".movie__desc");
const showMovie = (el) => {
  console.log(el[0]);
  const cloneHero = heroTemp.cloneNode(true);
  const cloneDesc = descTemp.cloneNode(true);
  // Hero
  cloneHero.querySelector("h1").textContent = el[0].title;
  cloneHero.querySelector("p:nth-child(2)").textContent = el[0].longDescription;
  cloneHero.querySelector("p:nth-child(3)").textContent = el[0].releaseYear;
  cloneHero.querySelector("img").src = el[0].images.mainImg;

  // Description
  cloneDesc.querySelector("p:nth-child(2)").textContent = el[0].castMembers;
  cloneDesc.querySelector("p:nth-child(4)").textContent = el[0].directors;
  cloneDesc.querySelector("span p").textContent = el[0].userRatings;
  cloneDesc.querySelector("img:last-child").src = el[0].images.secondaryImg;
  //   Append
  heroParent.append(cloneHero);
  descParent.append(cloneDesc);
};
