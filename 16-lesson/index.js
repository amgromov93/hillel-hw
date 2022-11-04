'use strict'

const INPUT_SELECTOR = '.input';
const BUTTON_SELECTOR = '.button';
const CONTAINER_SELECTOR = '.container';

const IMAGE_ELEMENT_CLASS = 'img';
const PARAGRAPH_ELEMENT_CLASS = 'p';

const setNameInput = document.querySelector(INPUT_SELECTOR);
const getDataBtn = document.querySelector(BUTTON_SELECTOR);
const dataContainer = document.querySelector(CONTAINER_SELECTOR);

getDataBtn.addEventListener('click', onDataBtnClick);

function onDataBtnClick(e) {
    fetch('https://api.github.com/users/' + `${setNameInput.value}`)
    .then((res) => {
        if (!res.ok) {
            throw Error(`Not Found! Error ` + res.status);
        }
        return res.json();
    })
    .then((res) => {
        const arrRes = res;

        getProfilAvatar();
        getRepos();
        getFollowers();
        getFollowings();
        clearInput();
   
        function getProfilAvatar() { 
            const profilAvatar = setElement(IMAGE_ELEMENT_CLASS);

            dataContainer.append(profilAvatar);
            profilAvatar.src = arrRes.avatar_url;
        }

        function getRepos() {
            const numberOfRepos = setElement(PARAGRAPH_ELEMENT_CLASS);

            dataContainer.append(numberOfRepos);
            numberOfRepos.textContent = `Repos: ${arrRes.public_repos}`;
        }

        function getFollowers() {
            const numberOfFollowers = setElement(PARAGRAPH_ELEMENT_CLASS);
            
            dataContainer.append(numberOfFollowers);
            numberOfFollowers.textContent = `Followers: ${arrRes.followers}`;
        }

        function getFollowings() {
            const numberOfFollowings = setElement(PARAGRAPH_ELEMENT_CLASS);

            dataContainer.append(numberOfFollowings);
            numberOfFollowings.textContent = `Followings: ${arrRes.following}`;
        }

        function setElement(element) {
            return document.createElement(element);
        }

        function clearInput() {
            return setNameInput.value = '';
        }
    })
    .catch((error) => {
        alert(error.message);
    })
}