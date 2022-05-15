//selectors
const todoInput = document.querySelector("#todo-input");
const addTodo = document.getElementById("add-todo");
const todoList = document.querySelector(".todo-list");
//eventlisteners
addTodo.addEventListener("click", makeTodo);
todoList.addEventListener("click", checkRemove);
//functions
function makeTodo(input) {
    input.preventDefault();
    //get value
    //create new todo
    const todoDiv = document.createElement("li");
    todoDiv.classList.add("todo-item");
    const newTodo = `<h3 class="text-title">${todoInput.value}</h3>
    <div class="icon-container">
        <span><i class="fa fa-check-square" aria-hidden="true"></i></span>
        <span><i class="fa fa-trash" aria-hidden="true"></i></span>
    </div>`;
    todoDiv.innerHTML = newTodo;
    //add to dom
    todoList.appendChild(todoDiv);
    //reset value
    todoInput.value = "";
}

function checkRemove(e) {
    const classList = [...e.target.classList];
    const item = e.target.parentElement.parentElement.parentElement;
    if (classList[1] === "fa-check-square") {
        item.setAttribute("id", "todo-completed");
        console.log(item);
    } else if (classList[1] === "fa-trash") {
        item.remove();
    }
}