const addItemBtn = document.getElementById("addItemBtn");
const removeLastItemBtn = document.getElementById("removeLastItemBtn");
const clearListBtn = document.getElementById("clearListBtn");
const itemInput = document.getElementById("itemInput");
const todoList = document.getElementById("todoList");

function createListItem(itemText) {
  const li = document.createElement("li");
  li.textContent = itemText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();
  li.appendChild(removeBtn);

  return li;
}

addItemBtn.addEventListener("click", () => {
  const itemText = itemInput.value.trim();

  if (itemText !== "") {
    const newItem = createListItem(itemText);
    todoList.appendChild(newItem);
    itemInput.value = "";
  } else {
    alert("Please enter a Query !!!");
  }
});

removeLastItemBtn.addEventListener("click", () => {
  if (todoList.children.length > 0) {
    todoList.removeChild(todoList.lastElementChild);
  } else {
    alert("The list is empty !!!");
  }
});

clearListBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
});
