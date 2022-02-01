const overskrift = document.querySelector("h1");
const art1 = document.querySelector("#art1");
const art2 = document.querySelector("#art2");
const foot = document.querySelector("footer");

const uart1 = document.querySelector("article:first-of-type h3");

const uart2 = document.querySelector("article:nth-child(2) h3");

overskrift.textContent = "Noget helt andet";
console.log(overskrift.textContent);

uart1.textContent = "Hej";
console.log(uart1.textContent);

uart2.innerHTML = "<h3>Med dig</h3>";
console.log(uart1.innerHTML);

art1.textContent;
console.log(art1.textContent);

art2.textContent;

console.log(art2.textContent);

foot.textContent;
console.log(foot.textContent);

// Udskriftning af billeder //
const img1 = document.querySelector("article:nth-child(1) img");
const img2 = document.querySelector("article:nth-child(2) img");

console.log(img1);
img1.src = "billede_2.jpg";
img1.alt = "hæhæ";

console.log(img2);
img2.src = "billede_1.jpg";
img2.alt = "hejhej";

// Øvelse 4 - Tilføj nyt element //
let mainSection = document.querySelector("section");
//Laver en ny artikel//
let newArticle = document.createElement("article");
//Nyt "h3" element//
let nyoverskrift = document.createElement("h3");
//Tekst til overskriften//
let overskriftText = document.createTextNode("Kaj");
//Indsætter overskriften i artiklen//
nyoverskrift.appendChild(overskriftText);
//Tilføjer overskrift til "article"//
newArticle.appendChild(nyoverskrift);
//Tilføjer "article" til "section"//
mainSection.appendChild(newArticle);

//Tilføjer nyt billede til den nye artikel//
let nyimg = document.createElement("img");
nyimg.src = "billede_2.jpg";
nyimg.alt = "hæhæ";
newArticle.appendChild(nyimg);

// Tilføjer tekst til den nye artikel
let nyTekst = document.createTextNode(
  "hejhejhehediewhfiwehnfieowhfiowehfuegfjehbfhgqeuygfe"
);
newArticle.appendChild(nyTekst);
