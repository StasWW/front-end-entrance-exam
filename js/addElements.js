/**
 * Adds input for the user to select language knowledge
 */
export const addLanguagePrompt = () => {
    const addPrompt = document.getElementById('addLanguagePlaceholder');
    if (addPrompt) addPrompt.remove();

    const parentNode = document.getElementById('languagePlaceholder');
    parentNode.classList.remove('hoverablePlaceholder');
    parentNode.removeEventListener('click', addLanguagePrompt);
    const promptHtml = `
    <div id="addLanguagePrompt" class="d-flex flex-row align-items-center gap-2">
      <input class="form-control" type="text" placeholder="Language name">
      <input class="form-range flex-grow-1" type="range" min="25" max="100" step="25" id="languageRange">
      <button class="btn btn-success" id="confirmButton">Confirm</button>
    </div>`;

    parentNode.insertAdjacentHTML('beforeend', promptHtml);

    const confirmBtn = document.getElementById('confirmButton');
    confirmBtn.addEventListener('click', () => {
        const name = document.querySelector('#addLanguagePrompt input[type=text]').value;
        const percentage = document.getElementById('languageRange').value;

        if (name && percentage) {
            addLanguage(name, percentage);
            const promptNode = document.getElementById('addLanguagePrompt');
            promptNode.remove()
        }
        else {
            alert(`Language field can't be empty!`);
        }

    });
}
/**
 * Places html element in place given
 * @param {string} language Language name
 * @param {number | string} progress Progress of language completed
 * */
const addLanguage = (language, progress) => {
    const place = document.getElementById('languagePlaceholder');
    const languageBarHTML = `
            <div class="langKnowledge d-flex flex-row align-items-center">
              <span class="col-3">${language}</span>
              <div class="knowledgeBar col h-100">
                <div style="background-color: #28D979; border-radius: 6px; height: 22px; width: ${progress}%"></div>
              </div>
            </div>`;
    place.insertAdjacentHTML('beforeend', languageBarHTML);
}
/**
 * Adds a prompt for user to enter their name
 * */
export const addNamePrompt = () => {
    const dummyText = document.querySelectorAll('#namePlaceholder p')[0];
    dummyText.remove();

    const parentNode = document.querySelectorAll('#namePlaceholder')[0];
    const nameInputHTML = `<input type="text" placeholder="Your name here" class="name"/>`;
    parentNode.insertAdjacentHTML('beforeend', nameInputHTML);

    const nameInputNode = document.querySelectorAll('#namePlaceholder input')[0];
    nameInputNode.addEventListener('blur', () => {
        if (nameInputNode.value) {
            addName(nameInputNode.value);
            nameInputNode.remove();
        } else {
            alert(`Name field can't be empty!`);
        }
    })
}
/**
 * Renders a name into predetermined placeholder
 * @param {string} name name to display
 * */
const addName = (name) => {
    const parentNode = document.getElementById('namePlaceholder');
    const nameHTML = `<p class="name">${name}</p>`;
    parentNode.insertAdjacentHTML(`beforeend`, nameHTML);
    parentNode.classList.remove('hoverablePlaceholder');
    parentNode.removeEventListener('click', addNamePrompt);
}
/**
 * Adds a prompt to input a profession
 * */
export const addProfessionPrompt = () => {
    const dummyText = document.querySelectorAll('#professionPlaceholder small')[0];
    dummyText.remove();

    const parentNode = document.getElementById('professionPlaceholder');
    const professionInputHTML = `<input type="text" placeholder="Your profession here" class="profession"/>`;
    parentNode.insertAdjacentHTML('beforeend', professionInputHTML);

    const professionInputNode = document.querySelectorAll('#professionPlaceholder input')[0];
    professionInputNode.addEventListener('blur', () => {
        if (professionInputNode.value) {
            addProfession(professionInputNode.value);
            professionInputNode.remove();
        } else {
            alert(`Profession field can't be empty!`)
        }
    })
}
/**
 * Renders a profession into predetermined placeholder
 * @param {string} profession name to display
 * */
const addProfession = (profession) => {
    const parentNode = document.getElementById('professionPlaceholder');
    const nameHTML = `<small class="profession">${profession}</small>`;
    parentNode.insertAdjacentHTML(`beforeend`, nameHTML);
    parentNode.classList.remove('hoverablePlaceholder');
    parentNode.removeEventListener('click', addProfessionPrompt);
}
/**
 * */
export const addProfilePicture = () => {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    if (files.length > 0) {
        const imageNode = document.getElementById('imagePlaceholder');

        const reader = new FileReader();
        reader.onload = function (e) {
            imageNode.innerHTML = `<img src="${e.target.result}" alt="Profile picture" style="width: 100%; height: 100%; object-fit: cover;""/>`;
        };
        reader.readAsDataURL(files[0]);
    }
}
export const addEmailPrompt = () => {
    const parentNode = document.getElementById('mailPlaceholder');
    parentNode.removeEventListener('click', addEmailPrompt);
    parentNode.innerHTML = `<input id="emailInput" placeholder="Your email here" type="email" style="color: #DDDDDD; font-size: calc(5px + 1vw); background-color: inherit" />`;

    const emailInput = document.getElementById('emailInput');
    emailInput.addEventListener('blur', () => {
        if (!emailInput.validity.valid) {
            alert("Please enter a valid email address.");
        } else {
            addEmail(emailInput.value);
        }
    });
}
/**
 * Adds email
 * @param {string} email email
 * */
const addEmail = (email) => {
    const parentNode = document.getElementById('mailPlaceholder');
    parentNode.innerHTML = `<a href="mailto:${email}">${email}</a>`;
}