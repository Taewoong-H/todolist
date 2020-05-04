const toDoForm = document.querySelector('.js-todoform'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-todolist');

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event) {
    const del = event.target;
    const li = del.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerText = '❌';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId,
    };
    toDos.push(toDoObj);
    saveToDos();
}

function toDoHandleSubmit(event) {
    event.preventDefault();
    const nowValue = toDoInput.value;
    paintToDo(nowValue);
    toDoInput.value = '';
}

function loadtoDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    }
}


function init() {
    loadtoDos();
    toDoForm.addEventListener('submit', toDoHandleSubmit);
}

init();