const url = "https://mmdzag-2550.restdb.io/rest/genres?max=8";
const options = {
  headers: {
    "x-apikey": "620cea5934fd621565858662",
  },
};
fetch(url, options)
  .then((res) => res.json())
  .then((data) => data.forEach((el) => showCategory(el)));

const template = document.querySelector("template").content;
const showCategory = (el) => {
  const clone = template.cloneNode(true);
  clone.querySelector("li a").href = `./genre.html?genre=${el.name}`;
  clone.querySelector("li a").textContent = `${el.name}`;

  document.querySelector(".genres").append(clone);
};
