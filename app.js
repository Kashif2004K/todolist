const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const input = document.querySelector(".input");

const addToDo = () => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const div = document.createElement("div");
  div.classList.add("todo-item");
  delBtn.textContent = "Delete";
  li.textContent = input.value;
  div.appendChild(li);
  div.appendChild(delBtn);
  ul.appendChild(div);
  input.value = "";
};

const deleteToDo = (e) => {
  if (e.target.tagName === "BUTTON") {
    const item = e.target.parentElement;
    ul.removeChild(item);
  }
};

ul.addEventListener("click", deleteToDo);
btn.addEventListener("click", addToDo);
