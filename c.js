const cC = document.querySelector(".js-clock1");
const cT = cC.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  cT.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}
init();
