// create new element and se innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerHTML = "abdur rahman";

// find the parent where you will add the child

const listName = document.getElementById("list1");

// append the child to the parent
listName.appendChild(newChild);
