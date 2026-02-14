// 2nd type of event handling
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// 3rd type of event Handling
const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};
