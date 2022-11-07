'use strict'

const URL = 'https://6366959a79b0914b75d41ae9.mockapi.io/api/todo';

const ADD_BUTTON_SELECTOR = '.items__add-btn';
const ITEM_BODY_SELECTOR = '.items__body';
const ITEM_BODY_BOX_SELECTOR = '.items__body-box';
const INPUT_SELECTOR = '.items__input';
const TODO_ITEM_TAMPLATE_SELECTOR = '.todoItemTamplate';


const addBtn = document.querySelector(ADD_BUTTON_SELECTOR);
const bodyItem = document.querySelector(ITEM_BODY_SELECTOR);
const input = document.querySelector(INPUT_SELECTOR);
const dataTamplate = document.querySelector(TODO_ITEM_TAMPLATE_SELECTOR).innerHTML;

addBtn.addEventListener('click', onAddBtnClick);

getTodoList();
setTodoItem();

function onAddBtnClick(e) {
    e.preventDefault();
    
    const todo = getTodo();
    

    if (!isInputValid(todo)) {
        alert('Field must be not empty');
        return
    }

    createTodo(todo);
    clearInput();
}

function getTodoList() {
    fetch(URL)
    .then((res) => {
        if (!res.ok) {
            throw Error(`Not Found! Error ` + res.status);
        }
        return res.json();
    })
    .then((todoList) => {
        renderTodoList(todoList);
    })
    .catch((error) => showError(error))
}

function createTodo(todo) {
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then((res) => {
        if (!res.ok) {
            throw Error(`Not Found! Error ` + res.status);
        }
        return res.json();
    })
    .then((todo) => {
        addTodoItem(todo);
    })
    .catch((error) => showError(error))
}

function renderTodoList(todoList) {
    todoList.forEach(todo => addTodoItem(todo));
}

function addTodoItem(todo) { 
    const html = dataTamplate
        .replace('{{todo.id}}', todo.id)
        .replace('{{title}}', todo.title)
        .replace('{{done}}', todo.done)
        
    bodyItem.insertAdjacentHTML('beforeend', html);
}

function getTodo() {
    return {
        title: input.value,
    }
}

function isInputValid(todo) {
    return todo.title !== '';
}

function clearInput() {
    input.value = '';
}

function setTodoItem() {
    bodyItem.addEventListener('click', onBodyItemClick)

    function onBodyItemClick(e) {
        const dataEl = findDataEl(e.target);

        if (e.target.classList.contains('button__delete')) {
            if (dataEl) {
                deleteTodoItem(dataEl);
                return dataEl.remove();
            }
        }
    }
}

function deleteTodoItem(dataEl) {
    fetch(URL + '/' + `${dataEl.dataset.id}`, {
        method: 'DELETE'
    })
    .then((res) => {
        if (!res.ok) {
            throw Error(`Not Found! Error ` + res.status);
        }
        return res.json();
    })
    .catch((error) => showError(error))
}

function findDataEl(el) {
    return el.closest(ITEM_BODY_BOX_SELECTOR);
}

function showError(error) {
    alert(error.message);
}