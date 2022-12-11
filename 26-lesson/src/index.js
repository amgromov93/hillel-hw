import ContactApi from './ContactApi.js';

import $ from 'jquery';
import 'webpack-jquery-ui/dialog';
import 'webpack-jquery-ui/css';

import './index.css';

const ADD_BUTTON_SELECTOR = '.add-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const DELETE_BTN_CLASS = 'delete-btn';
const TABLE_BODY_BOX_SELECTOR = '.table__body-box';
const INPUT_ITEM_SELECTOR = '.input__item';
const TABLE_BODY_SELECTOR = '.table__body';
const FIRST_INPUT_SELECTOR = '.input__item1';
const SECOND_INPUT_SELECTOR = '.input__item2';
const THIRD_INPUT_SELECTOR = '.input__item3';
const ID_INPUT_SELECTOR = '.idInput';

const inputs = document.querySelectorAll(INPUT_ITEM_SELECTOR);
const tableBody = document.querySelector(TABLE_BODY_SELECTOR);
const firstInput = document.querySelector(FIRST_INPUT_SELECTOR);
const secondInput = document.querySelector(SECOND_INPUT_SELECTOR);
const thirdInput = document.querySelector(THIRD_INPUT_SELECTOR);
const idInput = document.querySelector(ID_INPUT_SELECTOR);

const $tableBody = $(TABLE_BODY_SELECTOR);

let contactList = [];

const dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
        Save: () => {
            const contact = getContact();

            if (!isValueValid(contact)) {
                alert('Incorect value of inputs');
                return;
            }

            saveContactItem(contact);
            clearInputs();
            dialog.dialog( "close" );
            },

        Cancel: function() {
            dialog.dialog( "close" );
        }
    },
    close: function() {
        clearInputs();
    }
});

$(ADD_BUTTON_SELECTOR).on('click', onAddButtonClick);

tableBody.addEventListener('click', onTableBodyClick);

getContactList();

function onAddButtonClick(e) {
    dialog.dialog("open");
}

function onTableBodyClick(e) {
    const contactEl = findContactEl(e.target);
    const id = getContactElId(contactEl);
    const contact = contactList.find(contactI => contactI.id === id);
    
    if (contact) {
        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            deleteContactItem(id);
            removeContactElFromList(contactEl);
        }
    
        if (e.target.classList.contains(EDIT_BTN_CLASS)) {
            dialog.dialog("open");
            fillInputs(contact);
        }
    }
}

function getContactList() {
    ContactApi.getList()
        .then(list => contactList = list)
        .then(renderContactList)
        .catch(showError)
}

function saveContactItem(contact) {
    if (contact.id) {
        ContactApi.update(contact.id, contact).catch(showError)

        const contactOld = contactList.find(contactItem => contactItem.id === contact.id);
        contactOld.title = contact.title;
        
        replaceContactElById(contact.id, contact);
    } else {
        ContactApi.create(contact)
            .then(() => addContactItem(contact))
            .catch(showError)
    }
}

function replaceContactElById(id, contact) {
    const oldContactEl = document.querySelector(`[data-id="${id}"]`);
    const newContactEl = generateContactItemHTML(contact);

    oldContactEl.outerHTML = newContactEl;
}

function getContact() {
    const id = idInput.value;
    const contact = contactList.find(contactEl => contactEl.id === id) || {};

    return {
        ...contact,
        firstName: firstInput.value,
        lastName: secondInput.value,
        phone: thirdInput.value
    }
}

function renderContactList(contactList) {
    $tableBody.html(contactList.map(generateContactItemHTML));
}

function addContactItem(contact) {
    const html = generateContactItemHTML(contact);

    tableBody.insertAdjacentHTML('beforeend', html);
}

function generateContactItemHTML(contact) {
    return `
        <tr class="table__body-box" data-id=${contact.id}>
            <th class="table__body-item">${contact.firstName}</th>
            <th class="table__body-item">${contact.lastName}</th>
            <th class="table__body-item">${contact.phone}</th>
            <th class="table__body-item">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </th>
        </tr>
    `;
}

function findContactEl(el) {
    return el.closest(TABLE_BODY_BOX_SELECTOR);
}

function getContactElId(contactEl) {
    return contactEl.dataset.id;
}

function deleteContactItem(id) {
    ContactApi.delete(id).catch(Error)
}

function removeContactElFromList(contactEl) {
    return contactEl.remove();
}

function fillInputs(contact) {
    firstInput.value = contact.firstName;
    secondInput.value = contact.lastName;
    thirdInput.value = contact.phone;
    idInput.value = contact.id;
}

function isValueValid(contact) {
    return contact.firstName && contact.lastName && isPhoneValide(contact);
}

function isPhoneValide(contact) {
    return isNotEpty(contact.phone) && !isNaN(contact.phone);
}

function isNotEpty(contact) {
    return contact.phone !=='';
}

function clearInputs() {
    for (const input of inputs) {
        input.value = '';
    }
}

function showError(error) {
    alert(error.message);
}