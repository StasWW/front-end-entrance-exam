import {
    addEmailPrompt,
    addLanguagePrompt,
    addNamePrompt,
    addProfessionPrompt,
    addProfilePicture
} from './addElements.js';

const addFirstLanguage = document.getElementById('addLanguagePlaceholder');
addFirstLanguage.addEventListener('click', addLanguagePrompt);
const addLanguageBtn = document.getElementById('addLanguage');
addLanguageBtn.addEventListener('click', addLanguagePrompt);

const addName = document.getElementById(`namePlaceholder`);
addName.addEventListener('click', addNamePrompt);

const addProfession = document.getElementById(`professionPlaceholder`);
addProfession.addEventListener('click', addProfessionPrompt);

const fileUpload = document.getElementById('imagePlaceholder');
fileUpload.addEventListener('input', addProfilePicture);

const addEmail = document.getElementById('mailPlaceholder');
addEmail.addEventListener('click', addEmailPrompt);
