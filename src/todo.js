const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "todos";
var toDos = [];

function init() {
    toDoForm.addEventListener("submit", handleSubmit);
    loadToDos();
}

init();

function handleSubmit(event) {
    event.preventDefault();
    paintToDo(toDoInput.value);
    toDoInput.value = "";
}

function paintToDo(text) {
    const newId = toDos.length + 1;
    const li = document.createElement("li");
    li.id = newId;

    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteToDo);
    delBtn.innerText = "❌"

    const span = document.createElement("span");
    span.innerText = `${text}`;

    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }

    toDos.push(toDoObj);
    saveToDos();
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // filter 함수는 array를 돌며 인자로 가는 함수의 리턴값이 true인 요소만 담아 array 새로 만든다.
    const filteredToDos = toDos.filter(todo => {
        return todo.id !== parseInt(li.id);
    });

    toDos = filteredToDos;
    saveToDos();
}



function loadToDos() {
    const loadedToDo = localStorage.getItem(TODOS_LS);
    if (loadedToDo !== null) {
        const parsedObj = JSON.parse(loadedToDo);

        parsedObj.forEach(todo => {
            paintToDo(todo.text);
            console.log(todo.text);
        });
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}