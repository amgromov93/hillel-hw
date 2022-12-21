import { onOpen, onClose, onMessage, onError } from './module.js';

const SOCKET = 'ws://localhost:8080';
const FORM_SELECTOR = '#form';
const INPUTS_SELECTOR = '.input';
const INPUT_NAME_SELECTOR = '.inputName';
const INPUT_MESSAGE_SELECTOR = '.inputMessage';
const CHAT_CONTAINER_SELECTOR = '.container';

const ws = new WebSocket(SOCKET);

const form = document.querySelector(FORM_SELECTOR);
const inputs = document.querySelectorAll(INPUTS_SELECTOR);
const inputName = document.querySelector(INPUT_NAME_SELECTOR);
const inputMessage = document.querySelector(INPUT_MESSAGE_SELECTOR);
const container = document.querySelector(CHAT_CONTAINER_SELECTOR);

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault()

    for (const input of inputs) {
        if (input.value === '') {
            alert('Поля повинні бути заповнені!');
            return
        }
    }

    const username = inputName.value;
    const message = inputMessage.value;

    clearMessageInput();

    ws.send(JSON.stringify({ username, message }));
}

function clearMessageInput() {
    return inputMessage.value = ''
}



onOpen(ws);

onClose(ws);

onMessage(ws, container);

onError(ws);