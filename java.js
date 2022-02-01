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
