import {
    addEmailPrompt,
    addLanguagePrompt,
    addNamePrompt,
    addProfessionPrompt,
    addProfilePicture,
    addInterestPrompt,
    addSingleInterestPrompt,
    addEducationPrompt,
    addExpPrompt,
    addFirstExpFunc,
    addToolPrompt,
    addFirstTool
} from './addElements.js';
import { loadOnStartup } from "./storage.js";

const addFirstLanguage = document.getElementById('addLanguagePlaceholder');
const addLanguageBtn = document.getElementById('addLanguage');
if (addFirstLanguage) addFirstLanguage.addEventListener('click', addLanguagePrompt);
addLanguageBtn.addEventListener('click', addLanguagePrompt);

const addName = document.getElementById(`namePlaceholder`);
addName.addEventListener('click', addNamePrompt);

const addProfession = document.getElementById(`professionPlaceholder`);
addProfession.addEventListener('click', addProfessionPrompt);

const fileUpload = document.getElementById('imagePlaceholder');
fileUpload.addEventListener('input', addProfilePicture);

const addEmail = document.getElementById('mailPlaceholder');
addEmail.addEventListener('click', addEmailPrompt);

const addFirstInterest = document.getElementById('interestsPlaceholder');
const addInterestBtn = document.getElementById('addInterest')
if (addFirstInterest) addFirstInterest.addEventListener('click', addInterestPrompt);
addInterestBtn.addEventListener('click', addSingleInterestPrompt)

const addEducationBtn = document.getElementById('addEducation');
const addFirstEducation = document.getElementById('educationPlaceholder');
addEducationBtn.addEventListener('click', addEducationPrompt);
if (addFirstEducation) addFirstEducation.addEventListener('click', addEducationPrompt);

const addExpBtn = document.getElementById('addExperienceBtn');
const addFirstExp = document.getElementById('experiencePlaceholder');
if (addFirstExp) addFirstExp.addEventListener('click', addFirstExpFunc);
addExpBtn.addEventListener('click', addExpPrompt);

const addToolBtn = document.getElementById('addToolBtn');
const addToolArea = document.getElementById('addToolArea')
addToolBtn.addEventListener('click', addToolPrompt);
if (addToolArea) addToolArea.addEventListener('click', addFirstTool);

loadOnStartup();