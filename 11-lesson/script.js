const ADD_BUTTON_SELECTOR = '.add-btn';
const DELETE_BTN_CLASS = 'delete-btn';
const TABLE_BODY_BOX_SELECTOR = '.table__body-box';
const INPUT_ITEM_SELECTOR = '.input__item';
const TABLE_BODY_SELECTOR = '.table__body';
const TABLE_BODY_ITEM_CLASS = 'table__body-item';
const TABLE_TAMPLATE_SELECTOR = '.todoTableTamplate';

const btn = document.querySelector(ADD_BUTTON_SELECTOR);
const inputs = document.querySelectorAll(INPUT_ITEM_SELECTOR);
const tableBody = document.querySelector(TABLE_BODY_SELECTOR);
const contactTamplate = document.querySelector(TABLE_TAMPLATE_SELECTOR).innerHTML;

tableBody.addEventListener('click', onTableBodyClick);
btn.addEventListener('click', onAddButtonClick);


function onAddButtonClick(e) {
    e.preventDefault();

    const contact = getContact();

    if (!isValueValid(contact)) {
        alert('Error');
        return;
    }

    addContact(contact);
    clearInputs();
}

function onTableBodyClick(e) {
    const contactEl = findContactEl(e.target);
    
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {    
        
        if (contactEl) {
            deleteContactEl(contactEl);
        }
    }

    if (e.target.classList.contains(TABLE_BODY_ITEM_CLASS)) {
        
        if (contactEl) {
            paintContactEl(contactEl);
        }
    }
}

function findContactEl(el) {
    return el.closest(TABLE_BODY_BOX_SELECTOR);
}

function deleteContactEl(contactEl) {
    return contactEl.remove();
}

function paintContactEl(contactEl) {
    return contactEl.classList.toggle('green-line');
}

function getContact() {
    const contact = {};

    for (const {name, value} of inputs) {
        contact[name] = value;
    }

    return contact;
}

function isValueValid({name, surname, tel}) {
    return name && surname && isPhoneValide(tel);
}

function isPhoneValide(tel) {
    return isNotEpty(tel) && !isNaN(tel);
}

function isNotEpty(tel) {
    return tel !=='';
}

function addContact(contact) {
    const html = contactTamplate
        .replace('{{name}}', contact.name)
        .replace('{{surname}}', contact.surname)
        .replace('{{tel}}', contact.tel)

    tableBody.insertAdjacentHTML('beforeend', html);
}

function clearInputs() {
    for (const input of inputs) {
        input.value = '';
    }
}