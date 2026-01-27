const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  li.textContent = input.value;
  ul.appendChild(li);
  ul.appendChild(delBtn);
  input.value = " ";
});
