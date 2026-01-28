const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const input = document.querySelector(".input");

const addToDo = () => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
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
    const todoItem = e.target.parentElement;
    const li = todoItem.querySelector("li");
    const delBtn = todoItem.querySelector(".delete-btn");
    const editBtn = todoItem.querySelector(".edit-btn");

    delBtn.style.display = "none";
    editBtn.style.display = "none";

    const editInput = document.createElement("input");
    editInput.value = li.textContent;

    const confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirm-button");
    confirmBtn.textContent = "Confirm";

    const editDiv = document.createElement("div");
    editDiv.appendChild(editInput);
    editDiv.appendChild(confirmBtn);

    li.replaceWith(editDiv);

    confirmBtn.addEventListener("click", () => {
      const newLi = document.createElement("li");
      newLi.textContent = editInput.value;

      editDiv.replaceWith(newLi);
      delBtn.style.display = "inline";
      editBtn.style.display = "inline";
    });
  }
};

ul.addEventListener("click", editToDo);
ul.addEventListener("click", deleteToDo);
btn.addEventListener("click", addToDo);
