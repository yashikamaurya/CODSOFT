// "rgb(49, 47, 47)";
// background:c linear - gradient(white, rgb(201, 193, 193), rgb(114, 106, 106));
let result = document.getElementById("demo");

function insertValue(value) {
  result.value += value;
}
function clearInput() {
  result.value = "";
}
function deleteLast() {
  result.value = result.value.slice(0, -1);
}
function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Invalid expression");
    result.value = "";
  }
}
function darkmode() {
  const wrapperContainer = document.getElementById("wrap");
  wrapperContainer.style.background = "linear-gradient(to bottom, black, gray)";
  const heading = document.querySelectorAll("h1");
  heading.forEach((header) => {
    header.style.color = "white";
    header.style.textShadow = "5px 5px 10px white";
  });

  const containers = document.querySelectorAll(".container");
  containers.forEach((contain) => {
    contain.style.backgroundColor = "rgb(33, 33, 33)"; // Dark background for container
    contain.style.boxShadow = "0px 0px 30px white"; // White glow
  });
}
function lightmode() {
  const wrapperContainer = document.getElementById("wrap");
  wrapperContainer.style.background =
    "linear-gradient(white, rgb(201, 193, 193), rgb(114, 106, 106)";
  const heading = document.querySelectorAll("h1");
  heading.forEach((header) => {
    header.style.color = "black";
    header.style.textShadow = "1px 1px 10px black";
  });

  const containers = document.querySelectorAll(".container");
  containers.forEach((contain) => {
    contain.style.backgroundColor = "rgb(224, 224, 224)"; // Dark background for container
    contain.style.boxShadow = "0px 0px 20px black"; // White glow
  });
}
