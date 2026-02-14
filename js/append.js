// parent Node
const mainContainer = document.getElementById("main-container");

// create child Node
const placeSection = document.createElement("section");

// create H1
const h1 = document.createElement("h1");
h1.innerText = "Places I want to Visit";

// create a ul
const ul = document.createElement("ul");

//crete li
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

li1.innerText = "Cox's Bazar";
li2.innerText = "Bandorbhan";
li3.innerText = "Sylhet";
li4.innerText = "Kuakata";

// append placesSection to the mainContainer
mainContainer.appendChild(placeSection);
placeSection.appendChild(h1);
placeSection.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

// easier to create HTML
const movieSection = document.createElement("section");
movieSection.innerHTML = `
<h1>Movie I want to watch</h1>
<ul>
    <li>GreenLand</li>
    <li>Homebound</li>
    <li>Fire & Ash</li>
    <li>End Game</li>
</ul>
`;

// connecting with mainContainer
mainContainer.appendChild(movieSection);
