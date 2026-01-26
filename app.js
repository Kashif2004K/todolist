const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = " ";
});
