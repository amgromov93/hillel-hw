'use strict'

const DELETE_BTN_SELECTOR = '.button__delete';
const ADD_BTN_SELECTOR = '.button__add';
const TEXT_AREA_SELECTOR = '.sticker__textarea';
const STICKER_ITEM_SELECTOR = '.sticker__item';
const STICKER_BOX_SELECTOR = '.sticker__box';
const TEXT_AREA_NUM = 1;
const FIRST_FORM = 0;
const EMPTY_STICKER = {};

const $stickerBox = $(STICKER_BOX_SELECTOR);
const $addBtn = $(ADD_BTN_SELECTOR);
const $deleteBtn = $(DELETE_BTN_SELECTOR);
const $inputs = $('input');
const $form = $('#dialog-form form')[FIRST_FORM];

let stickerList = [];

const modal = new FormModal("#dialog-form", createSticker);

$addBtn.on('click', onAddBtnClick);
$stickerBox
    .on('focusout',TEXT_AREA_SELECTOR, onStickerBoxFocus)
    .on('click', DELETE_BTN_SELECTOR, onDeleteBtnClick);

getStickerItems();

function onAddBtnClick() {
    modal.open(EMPTY_STICKER)
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

function createSticker(sticker) {
    StickerApi.create(sticker)
    .then((newSticker) => {
        stickerList.push(newSticker);
        renderSticker(newSticker);
    })
    .catch(showError)
}

function setStickerTextArea(el) {
    return el.children[TEXT_AREA_NUM].value;
}

function renderStickers(stickers) {
    const $stickers = stickers.map(generateStickerEl);
  
    $stickerBox.append($stickers);
}

function renderSticker(sticker) {
    const $stickers = generateStickerEl(sticker);

    $stickerBox.append($stickers);
}

function generateStickerEl(sticker) {
    const $stickerEl = $(generateHtml(sticker));
    
    return $stickerEl;
}

function generateHtml(sticker) {
    return `
        <div class="sticker__item" data-id="${sticker.id}">
            <button class="button__delete">X</button>
            <textarea class="sticker__textarea" id="${sticker.id}" cols="20" rows="2">${sticker.description}</textarea>
        </div>
    `
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