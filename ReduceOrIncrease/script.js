const main = document.getElementById("container");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const too = document.getElementById("too");
let a = 12;
too.innerText = a;

increase.addEventListener("click", () => {
  a = a + 1;
  too.innerText = a;
});
decrease.addEventListener("click", () => {
  a = a - 1;
  too.innerText = a;
});