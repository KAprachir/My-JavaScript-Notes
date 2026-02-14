// // DOM = Document Object Model
// /**
//  * types DOM Traversing
//  * getElementsByTagName
//  * getElementById
//  * getElementsByClassName
//  * quarrySelectorAll
//  * quarrySelector
//  */

// // getElementsByTagName
// // it select the element by HTML tags
// const tagElements = document.getElementsByTagName("li");
// console.log(tagElements);
// for (const element of tagElements) {
//   console.log(element.innerText);
// }

// //getElementById
// // it select the element by specific ID
// const idElements = document.getElementById("section-title");
// console.log(idElements);
// console.log(idElements.innerText);

// // getElementsByClassName
// // it select element by the class name
// const classElements = document.getElementsByClassName("protinfood");
// console.log(classElements);
// for (const element of classElements) {
//   console.log(element.innerText);
// }

// // quarrySelectorAll
// // it select by CSS selecting system
// const quarryAllElements = document.querySelectorAll("#id1 h1 span");
// console.log(quarryAllElements);
// for (const element of quarryAllElements) {
//   console.log(element.innerText);
// }
// // quarrySelector
// // it select by CSS selecting system
// const quarryElements = document.querySelector("span");
// console.log(quarryElements);
// console.log(quarryElements.innerText);

// // Changing style using DOM
// const tittle = document.getElementById("favfood");
// // adding css style
// tittle.style.backgroundColor = "blue";
// tittle.style.textAlign = "center";
// // adding a  css class
// tittle.classList.add("big");
