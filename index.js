//selectors
const todoInput = document.querySelector("#todo-input");
const addTodo = document.getElementById("add-todo");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");
//eventlisteners
addTodo.addEventListener("click", makeTodo);
todoList.addEventListener("click", checkRemove);
filterOption.addEventListener("click", filterTodo);
//functions
function makeTodo(input) {
    input.preventDefault();
    //get value
    //create new todo
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-item");
    const newTodo = `<h3 class="text-title">${todoInput.value}</h3>
                     <div class="icon-container">
                        <span><i class="fa fa-check-square" aria-hidden="true"></i></span>
                        <span><i class="fa fa-trash" aria-hidden="true"></i></span>
                     </div>`;
    todoLi.innerHTML = newTodo;
    saveToLocal(todoLi);
    //add to dom
    todoList.appendChild(todoLi);
    //reset value
    todoInput.value = "";
}

function checkRemove(e) {
    const classList = [...e.target.classList];
    const item = e.target.parentElement.parentElement.parentElement;
    if (classList[1] === "fa-check-square") {
        item.classList.toggle("todo-completed");
        console.log(item.classList);
    } else if (classList[1] === "fa-trash") {
        item.remove();
    }
}

function filterTodo(e) {
    const filterClass = e.target.value;
    const todoItems = [...todoList.childNodes];
    console.log(todoItems);
    todoItems.forEach((t) => {
        const todoClasses = [...t.classList];
        switch (filterClass) {
            case "all":
                t.style.display = "flex";
                break;
            case "completed":
                if (todoClasses.includes("todo-completed")) {
                    t.style.display = "flex";
                } else {
                    t.style.display = "none";
                    console.log(t.classList);
                }
                break;
            case "uncompleted":
                if (todoClasses.includes("todo-completed")) t.style.display = "none";
                else t.style.display = "flex";
                break;
        }
    });
}

function saveToLocal(todos) {
    const todoItems = document.querySelectorAll(".todo-item");
    let savedTodos = localStorage.getItem("todoItems") ?
        JSON.parse(localStorage.getItem("todoItems")) :
        [];
    savedTodos.push(todoItems);
    localStorage.setItem("todoItems", JSON.stringify(savedTodos));
    console.log(savedTodos);
}