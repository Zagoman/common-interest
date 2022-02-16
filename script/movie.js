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

/* 
  <template id="movie-hero">
          <h1>{{Movie Title}}</h1>
          <p class="body">{{Movie Description}}</p>
          <p class="body is--release-date">{{Release Date}}</p>
          <img src="{{Movie img[0]}}" alt="" />
        </template>
  */

/*
  <template id="movie-desc">
          <h2>{{Main Actors}}</h2>
          <ul>
            <li class="actor__name">{{Actor name}}</li>
            <li class="actor__name">{{Actor name}}</li>
            <li class="actor__name">{{Actor name}}</li>
          </ul>
          <h2>{{Directors}}</h2>
          <ul>
            <li class="actor__name">{{Director name}}</li>
            <li class="actor__name">{{Director name}}</li>
          </ul>
          <h2>{{Ratings}}</h2>
          <span><img src="" alt="star" /> {{Ratings}}</span>
          <img src="{{Movie img[1]" alt="" />
        </template>          
 */
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
  cloneHero.querySelector("img").src = el[0].images.mainImage;

  // Description
  cloneDesc.querySelector("p:nth-child(2)").textContent = el[0].castMembers;
  cloneDesc.querySelector("p:nth-child(4)").textContent = el[0].directors;
  cloneDesc.querySelector("span p").textContent = el[0].userRatings;
  //   Append
  heroParent.append(cloneHero);
  descParent.append(cloneDesc);
};
