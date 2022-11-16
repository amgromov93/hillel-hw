import GalleryApi from "./GalleryApi.js";

'use strict'

const GALLERY_LIST_LINK_CLASS = 'galleryLink';
const GALLERY_LIST_LINK_SELECTOR = '.galleryLink';
const GALLERY_LIST_SELECTOR = '.gallery__list';
const GALLERY_BOX_SELECTOR = '.gallery__box';
const FIRST_ELEMENT_NUMBER = '0';

const galleryList = document.querySelector(GALLERY_LIST_SELECTOR);
const galleryBox = document.querySelector(GALLERY_BOX_SELECTOR);

getGalleryList();

galleryList.addEventListener('click', onGalleryListClick)

function onGalleryListClick(e) {
    const galleryListEl = getGalleryListEl(e.target);
    const id = getId(galleryListEl);

    if (e.target.classList.contains(GALLERY_LIST_LINK_CLASS)) {
        getGalleryBox(id);
    }
}

function getGalleryList() {
    GalleryApi.get(GalleryApi.URL_LIST)
        .then((galleryListEl) => {
            const firstLinkId = getFirstLinkId(galleryListEl);

            renderGalleryList(galleryListEl);
            getGalleryBox(firstLinkId);
        })
        .catch(showError)
}

function renderGalleryList(galleryListEl) {
    const html = generateHtml(galleryListEl, generateGalleryListItemHTML);

    galleryList.innerHTML = html;
}

function generateGalleryListItemHTML(gallery) {
    return `
        <button class="galleryLink" data-id="${gallery.id}">${gallery.title}</button>
    `
}

function getGalleryListEl(el) {
    return el.closest(GALLERY_LIST_LINK_SELECTOR);
}

function getId(galleryListEl) {
    return galleryListEl.dataset.id;
}

function getGalleryBox(id) {
    GalleryApi.get(GalleryApi.URL_IMAGE_BOX + id)
        .then((galleryBoxEl) => {
            renderGalleryBox(galleryBoxEl)
        })
        .catch(showError)
}

function renderGalleryBox(galleryBoxEl) {
    const html = generateHtml(galleryBoxEl, generateGalleryImageBoxHTML);

    galleryBox.innerHTML = html;
}

function generateGalleryImageBoxHTML(gallery) {
    return `
        <img src="${gallery.thumbnailUrl}" alt="#">
    `
}

function generateHtml(galleryEl, generateHtml) {
    return galleryEl.map(generateHtml).join('')
}

function getFirstLinkId(galleryListEl) {
    return galleryListEl[FIRST_ELEMENT_NUMBER].id
}

function showError(error) {
    alert(error.message)
}