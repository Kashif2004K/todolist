const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const input = document.querySelector(".input");

btn.addEventListener("click", (e) => {
  li.textContent = input.text;
  ul.appendChild(li);
});
