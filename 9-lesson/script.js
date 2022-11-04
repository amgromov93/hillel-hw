'use strict'

const boxEl = document.querySelector('.list__box');
const inputEl = document.querySelector('.list__input');
const btnEl = document.querySelector('.list__btn');

btnEl.addEventListener('click', onAddButtonClick);



function onAddButtonClick() {
    if (inputEl.value) {
        validValue();
    }
}

function validValue() {
    const message = getMessage();

    addItem(message);
    clearInput();
}

function getMessage() {
    return inputEl.value;
}

function addItem(message) {
    const li = document.createElement('li');
    li.textContent = message;

    boxEl.append(li);
}

function clearInput() {
    inputEl.value = '';
}