'use strict'

const DELETE_BTN_SELECTOR = '.button__delete';
const ADD_BTN_SELECTOR = '.button__add';
const TEXT_AREA_SELECTOR = '.sticker__textarea';
const STICKER_ITEM_SELECTOR = '.sticker__item';
const STICKER_BOX_SELECTOR = '.sticker__box';
const TEXT_AREA_NUM = 1;

const $stickerBox = $(STICKER_BOX_SELECTOR);
const $addBtn = $(ADD_BTN_SELECTOR);
const $deleteBtn = $(DELETE_BTN_SELECTOR)

let stickerList = []

$addBtn.on('click', onAddBtnClick);
$stickerBox
    .on('focusout',TEXT_AREA_SELECTOR, onStickerBoxFocus)
    .on('click', DELETE_BTN_SELECTOR, onDeleteBtnClick);

getStickerItems();

function onAddBtnClick(e) {
    e.preventDefault();
   
    const sticker = getSticker();

    createSticker();
}

function onDeleteBtnClick(e) {
    const stickerEl = getStickerEl(e.target);
    const id = getStickerId(stickerEl);

    if (stickerEl) {
        StickerApi.delete(id).catch(showError);
        stickerEl.remove();
    }
}

function onStickerBoxFocus(e) {
    const stickerEl = getStickerEl(e.target);
    const id = getStickerId(stickerEl);
    const sticker = getStickerById(id);

    sticker.description = setStickerTextArea(stickerEl);
    
    if (sticker) {
        StickerApi.update(sticker.id, sticker).catch(showError)
    }
}

function getStickerItems() {
    StickerApi.get()
    .then(list => stickerList = list)
    .then(renderStickers)
    .catch(showError)
}

function createSticker() {
    StickerApi.create()
    .then(getStickerItems)
    .catch(showError)
}

function setStickerTextArea(el) {
    return el.children[TEXT_AREA_NUM].value
}

function renderStickers(sticker) {
    $stickerBox.html(sticker.map(generateHtml))
}

function generateHtml(sticker) {
    return `
        <div class="sticker__item" data-id="${sticker.id}">
            <button class="button__delete">X</button>
            <textarea class="sticker__textarea" id="${sticker.id}" cols="20" rows="2">${sticker.description}</textarea>
        </div>
    `
}

function getSticker() {
    return {
        description: ''
    }
}

function getStickerEl(el) {
    return el.closest(STICKER_ITEM_SELECTOR)
}

function getStickerId(sticker) {
    return sticker.dataset.id
}

function getStickerById(id) {
    return stickerList.find(sticker => sticker.id ===id)
}

function showError(error) {
    alert(error.message)
}