const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const input = document.querySelector(".input");

const addToDo = () => {
  li = document.createElement("li");
  delBtn = document.createElement("button");
  editBtn = document.createElement("button");
  const div = document.createElement("div");
  div.classList.add("todo-item");
  delBtn.classList.add("delete-btn");
  editBtn.classList.add("edit-btn");
  delBtn.textContent = "Delete";
  editBtn.textContent = "Edit";
  li.textContent = input.value;
  div.appendChild(li);
  div.appendChild(delBtn);
  div.appendChild(editBtn);
  ul.appendChild(div);
  input.value = "";
};

const deleteToDo = (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const item = e.target.parentElement;
    ul.removeChild(item);
  }
};

const editToDo = (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const editInput = document.createElement("input");
    delBtn.style.display = "none";
    editBtn.style.display = "none";
    const confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirm-button");
    confirmBtn.textContent = "Confirm";
    const editDiv = document.createElement("div");
    editDiv.appendChild(editInput);
    editDiv.appendChild(confirmBtn);
    li.replaceWith(editDiv);
  }
};

ul.addEventListener("click", editToDo);
ul.addEventListener("click", deleteToDo);
btn.addEventListener("click", addToDo);
