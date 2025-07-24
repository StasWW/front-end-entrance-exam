import {addEducationPrompt, addFirstTool, addInterestPrompt, addProfessionPrompt} from "./addElements.js";

/**
 * This function checks if data was input before and add existing data
 * */
export const loadOnStartup = () => {
    const pfpPicture = localStorage.getItem('pfpPicture');
    if (pfpPicture) loadPfpPicture(pfpPicture);

    const name = localStorage.getItem('name');
    if (name) loadName(name);

    const profession = localStorage.getItem('profession');
    if (profession) loadProfession(profession);

    const languages = localStorage.getItem('languages');
    if (languages) loadLanguages(JSON.parse(languages));

    const experience = localStorage.getItem('experience');
    if (experience) loadExperience(experience);

    const tools = localStorage.getItem('tools');
    if (tools) loadTools(tools);

    const education = localStorage.getItem('education');
    if (education) loadEducation(education);

    const interests = localStorage.getItem('interests');
    if (interests) loadInterests(interests);

    const email = localStorage.getItem('email')
    if (email) loadEmail(email);
}

export const saveEmail = (email) => {
    localStorage.setItem('email', email);
}
export const savePfp = (pfpSrc) => {
    localStorage.setItem('pfpPicture', pfpSrc);
}
export const saveLanguages = (language, progress) => {
    const prevState = localStorage.getItem('languages');
    let currState = [];
    if (prevState) {
        const prevStateJSON = JSON.parse(prevState);
        currState = [...prevStateJSON,
        {
            language,
            progress,
        }]
    } else {
        currState = [{ 'name': language, 'progress': progress }];
    }
    localStorage.setItem('languages', JSON.stringify(currState));
}
export const saveName = (name) => {
    localStorage.setItem('name', name);
}
export const saveExperienceInnerHTML = () => {
    const parentNode = document.getElementById('experiencePlaceholder');
    localStorage.setItem('experience', parentNode.innerHTML);
}
export const saveInterest = () => {
    const parentNode = document.getElementById('interestsPlaceholder');
    localStorage.setItem('interests', parentNode.innerHTML);
}
export const saveEducation = () => {
    const parentNode = document.getElementById('educationPlaceholder');
    localStorage.setItem('education', parentNode.innerHTML);
}
export const saveProfession = (profession) => {
    localStorage.setItem('profession', profession);
}
export const saveTools = () => {
    localStorage.setItem('tools', document.getElementById('toolsPlaceholder').innerHTML);
}

const loadEducation = (education) => {
    const parentNode = document.getElementById('educationPlaceholder');
    parentNode.removeEventListener('click', addEducationPrompt);
    const dummyChild = document.querySelectorAll('#educationPlaceholder .hoverablePlaceholder')[0];
    if (dummyChild) dummyChild.remove();

    parentNode.innerHTML = education;
}
const loadPfpPicture = (pfpSrc) => {
    document.getElementById('imagePlaceholder').innerHTML = `<img src="${pfpSrc}" class="animate__animated animate__fadeIn" alt="Profile picture" style="width: 100%; height: 100%; object-fit: cover;""/>`
}
const loadName = (name) => {
    const parentNode = document.getElementById('namePlaceholder');
    parentNode.innerHTML = `<p class="name animate__animated animate__fadeIn">${name}</p>`;
    parentNode.classList.remove('hoverablePlaceholder');
}
const loadProfession = (profession) => {
    const dummyText = document.querySelectorAll('#professionPlaceholder small')[0];
    dummyText.remove();

    const parentNode = document.getElementById('professionPlaceholder');
    const nameHTML = `<small class="profession animate__animated animate__fadeIn">${profession}</small>`;
    parentNode.insertAdjacentHTML(`beforeend`, nameHTML);
    parentNode.classList.remove('hoverablePlaceholder');
    parentNode.removeEventListener('click', addProfessionPrompt);
}
const loadEmail = (email) => {
    document.getElementById('mailPlaceholder').innerHTML = `<a href="mailto:${email}" class="animate__animated animate__fadeIn">${email}</a>`;
}
const loadLanguages = (langArr) => {
    const parentNode = document.getElementById('languagePlaceholder');
    parentNode.classList.remove('hoverablePlaceholder');
    parentNode.innerHTML = '';

    for (let languageObj of langArr) {
        const place = document.getElementById('languagePlaceholder');
        const languageBarHTML = `
            <div class="langKnowledge d-flex flex-row align-items-center mt-2 animate__animated animate__fadeIn">
              <span class="col-3">${languageObj['language']}</span>
              <div class="knowledgeBar col h-100">
                <div style="background-color: #28D979; border-radius: 6px; height: 22px; width: ${languageObj['progress']}%"></div>
              </div>
            </div>`;
        place.insertAdjacentHTML('beforeend', languageBarHTML);
    }
}
const loadInterests = (interests) => {
    const parentNode = document.getElementById('interestsPlaceholder');
    parentNode.classList.remove('hoverablePlaceholder', 'justify-content-center', 'align-items-center');
    parentNode.removeEventListener('click', addInterestPrompt);

    parentNode.innerHTML = interests;
}
const loadExperience = (experience) => {
    const parentNode = document.getElementById('experiencePlaceholder');
    parentNode.classList.remove("hoverablePlaceholder", "d-flex", "justify-content-center", "align-items-center");
    parentNode.innerHTML = experience;
}
const loadTools = (tools) => {
    const hintNode = document.getElementById('addToolArea');
    if (hintNode !== null) {
        hintNode.removeEventListener('click', addFirstTool);
        hintNode.remove();
    }

    const parentNode = document.getElementById('toolsPlaceholder');
    parentNode.innerHTML = tools;
}