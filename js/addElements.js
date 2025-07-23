import {addDragAndDrop} from './dragAndDrop.js';
/**
 * Adds input for the user to select language knowledge
 */
export const addLanguagePrompt = () => {
    const addPrompt = document.getElementById('addLanguagePlaceholder');
    if (addPrompt) addPrompt.remove();

    if ((document.querySelectorAll('#addLanguagePrompt').length + document.querySelectorAll('div.langKnowledge').length) >= 3) {
        alert('Be humble! Add only 3 languages you know');
        return;
    }

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
            promptNode.remove();
        }
        else {
            alert(`Language field can't be empty!`);
        }
    });
}

/**
 * Removes event listeners and cleans up language prompt
 */
const removeLanguageListeners = () => {
    const addLanguageBtn = document.getElementById('addLanguage');
    addLanguageBtn.removeEventListener('click', addLanguagePrompt);

    const addLanguagePlaceholder = document.getElementById('addLanguagePlaceholder');
    addLanguagePlaceholder.removeEventListener('click', addLanguagePrompt);
}

/**
 * Places html element in place given
 * @param {string} language Language name
 * @param {number | string} progress Progress of language completed
 */
const addLanguage = (language, progress) => {
    const place = document.getElementById('languagePlaceholder');
    const languageBarHTML = `
            <div class="langKnowledge d-flex flex-row align-items-center mt-2">
              <span class="col-3">${language}</span>
              <div class="knowledgeBar col h-100">
                <div style="background-color: #28D979; border-radius: 6px; height: 22px; width: ${progress}%"></div>
              </div>
            </div>`;
    place.insertAdjacentHTML('beforeend', languageBarHTML);
}

/**
 * Adds a prompt for user to enter their name
 */
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
    });
}

/**
 * Renders a name into predetermined placeholder
 * @param {string} name name to display
 */
const addName = (name) => {
    const parentNode = document.getElementById('namePlaceholder');
    const nameHTML = `<p class="name">${name}</p>`;
    parentNode.insertAdjacentHTML(`beforeend`, nameHTML);
    parentNode.classList.remove('hoverablePlaceholder');
    parentNode.removeEventListener('click', addNamePrompt);
}

/**
 * Adds a prompt to input a profession
 */
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
    });
}

/**
 * Renders a profession into predetermined placeholder
 * @param {string} profession name to display
 */
const addProfession = (profession) => {
    const parentNode = document.getElementById('professionPlaceholder');
    const nameHTML = `<small class="profession">${profession}</small>`;
    parentNode.insertAdjacentHTML(`beforeend`, nameHTML);
    parentNode.classList.remove('hoverablePlaceholder');
    parentNode.removeEventListener('click', addProfessionPrompt);
}

/**
 * Adds profile picture
 */
export const addProfilePicture = () => {
    const fileInput = document.getElementById('fileInputPfp');
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

/**
 * Adds email prompt
 */
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
 */
const addEmail = (email) => {
    const parentNode = document.getElementById('mailPlaceholder');
    parentNode.innerHTML = `<a href="mailto:${email}">${email}</a>`;
}
/**
 * Adds text area to input interests
 * */
export const addInterestPrompt = () => {
    const parentNode = document.getElementById('interestsPlaceholder');
    parentNode.classList.remove('hoverablePlaceholder', 'justify-content-center', 'align-items-center');
    parentNode.removeEventListener('click', addInterestPrompt);
    parentNode.innerHTML = `<textarea class="interestsInput" id="interestTextarea"></textarea>`;

    const textArea = document.getElementById('interestTextarea');
    textArea.addEventListener('blur', () => {
        if (textArea.value) {
            for (let interest of textArea.value.split(' ')) {
                if (interest) addInterest(interest);
            }
            textArea.remove();
        } else {
            alert(`You must be interested in something!`);
        }
    })
}
/**
 * Adds a single input to input one interest
 * */
export const addSingleInterestPrompt = () => {
    const pElement = document.getElementById('interestSampleText');
    if (pElement !== null) pElement.remove();
    const inputs = document.querySelectorAll('.interestsInputSingle');
    if (inputs.length > 0) return;

    const parentNode = document.getElementById('interestsPlaceholder');
    parentNode.classList.remove('hoverablePlaceholder', 'justify-content-center', 'align-items-center');
    parentNode.removeEventListener('click', addInterestPrompt);
    parentNode.insertAdjacentHTML('beforeend', `<input type="text" style="width: 2rem" class="interestsInputSingle" id="interestSingleInput" />`);

    const textInput = document.getElementById('interestSingleInput');
    textInput.addEventListener('input', () => {
        textInput.style.width = '10px';
        textInput.style.width = (textInput.scrollWidth + 2) + 'px';
    });
    textInput.addEventListener('blur', () => {
        if (textInput.value) {
            addInterest(textInput.value);
            textInput.remove();
        }
        else alert('You must have an interest!')
    })
}
/**
 * Adds a single span element containing an interest
 * @param {string} interest interest
 * */
const addInterest = (interest) => {
    const interestHTML = `<span class="interest">${interest}</span>`;
    const interestPlaceholder = document.getElementById('interestsPlaceholder');
    interestPlaceholder.insertAdjacentHTML('beforeend', interestHTML);
}

export const addEducationPrompt = () => {
    if (document.querySelectorAll('form.educationBox')[0]) {
        alert('Fill out the just created form first!');
        return;
    }

    const parentNode = document.getElementById('educationPlaceholder');
    parentNode.removeEventListener('click', addEducationPrompt);

    const dummyChild = document.querySelectorAll('#educationPlaceholder .hoverablePlaceholder')[0];
    if (dummyChild) dummyChild.remove();

    const educationInput = `<form class="educationBox d-flex justify-content-between flex-column" id="educationInput">
                                    <div class="d-flex justify-content-between align-items-center"><input class="year" type="text" id="yearStart" required style="margin-right: 1rem; width: 45%; display: inline" placeholder="2020"><span style="margin-right: 1rem">&mdash;</span><input class="year" type="text" id="yearEnd" placeholder="2025" style="width: 45%; display: inline"></div>
                                    <div class="professionName">
                                      <input class="specialty" id="specialtyInput" type="text" placeholder="Your position" style="margin-top: 1rem" required />
                                      <textarea class="hashtags d-flex align-items-stretch flex-wrap g-1" id="hashtags" required style="width: 100%"></textarea>
                                    </div>
                                    <input class="firm" id="firmInput" type="text" placeholder="Firm" required/>
                                    <button type="submit">Add</button>
                                  </form>`;

    parentNode.insertAdjacentHTML('beforeend', educationInput);

    const educationInputNode = document.getElementById('educationInput');
    educationInputNode.addEventListener('submit', (e) => {
        e.preventDefault();
        const yearStart = document.getElementById('yearStart').value;
        const yearEnd = document.getElementById('yearEnd').value;
        const specialty = document.getElementById('specialtyInput').value;
        const hashtags = document.getElementById('hashtags').value;
        const firm = document.getElementById('firmInput').value;

        addEducation(specialty, hashtags, firm, yearStart, yearEnd);

        educationInputNode.remove();
    })
}
/**
 * Adds education box
 * @param {string} profession profession
 * @param {string} skills skills
 * @param {string} firm firm
 * @param {string} yearStart year
 * @param {string} [yearEnd] year
 * */
const addEducation = (profession, skills, firm, yearStart, yearEnd) => {
    const yearsString = yearStart + (yearEnd && yearStart !== yearEnd ? ` - ${yearEnd}` : '');
    const hashtags = skills.split(' ').map( word => `<span>${word}</span>` ).join('');
    const educationHTML = `<div class="educationBox d-flex justify-content-between flex-column">
                                    <div class="d-flex justify-content-between"><p class="year d-inline">${yearsString}</p><svg style="aspect-ratio: 1/1; height: 100%" height="11" width="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.75 0.807373C1.99375 0.807373 1.32 1.12388 0.81125 1.61929C0.31625 2.1147 0 2.78901 0 3.55965C0 4.31653 0.31625 4.99083 0.81125 5.5L5.5 10.1926L10.1887 5.5C10.6838 5.0046 11 4.33029 11 3.55965C11 2.80277 10.6838 2.12847 10.1887 1.61929C9.69375 1.12388 9.02 0.807373 8.25 0.807373C7.49375 0.807373 6.82 1.12388 6.31125 1.61929C5.81625 2.1147 5.5 2.78901 5.5 3.55965C5.5 2.80277 5.18375 2.12847 4.68875 1.61929C4.19375 1.12388 3.52 0.807373 2.75 0.807373Z" fill="#F6ED1E"/> </svg></div>
                                    <div class="professionName">
                                      <p class="specialty">${profession}</p>
                                      <div class="hashtags d-flex align-items-stretch flex-wrap g-1">
                                        ${hashtags}
                                      </div>
                                    </div>
                                    <p class="firm">${firm}</p>
                                  </div>`;

    const parentNode = document.getElementById('educationPlaceholder');
    parentNode.insertAdjacentHTML('beforeend', educationHTML);

}
/**
 * */
export const addExpPrompt = () => {
    const handleAddExp = (e) => {
        e.preventDefault();
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        if (new Date(startDate) >= new Date(endDate)) {
            alert('End date can be smaller than the start date!');
            return;
        }
        const occupation = document.getElementById('occupationInput').value;
        const occupationSubtitle = document.getElementById('occupationSubtitleInput').value;
        const responsibilities = document.getElementById('responsibilities').value
            .split('\n')
            .filter(responsibility => responsibility.trim() !== '');
        addExp(startDate, endDate, occupation, occupationSubtitle, responsibilities);
        document.getElementById('addExpBtn').removeEventListener('click', handleAddExp)
        document.getElementById('formExp').remove();
    };
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const expPrompt = `<form class="experienceBox" id="formExp">
          <div><input type="date" id="startDate" max="${year}-${month}-${day}"> - <input type="date" id="endDate" max="${year}-${month}-${day}"></div>
          <div class="d-flex">
            <div class="occupation col-4">
              <input class="occupationTitle" type="text" id="occupationInput" placeholder="Occupation" style="height: 2rem" required />
              <input class="occupationSubtitle" type="text" id="occupationSubtitleInput" placeholder="Position" required/>
            </div>
            <div class="responsibilities col">
              <textarea placeholder="New line counts as a new bullet point" id="responsibilities" style="width: 100%; height; 100%"></textarea>
            </div>
          </div>
          <button type="button" id="addExpBtn">Add Experience</button>
            </form>`;

    const parentNode = document.getElementById('experiencePlaceholder');
    parentNode.insertAdjacentHTML('beforeend', expPrompt);

    const addExpBtn = document.getElementById('addExpBtn');
    addExpBtn.addEventListener('click', handleAddExp);

}
export const addFirstExpFunc = () => {
    const addFirstExp = document.getElementById('experiencePlaceholder');
    addFirstExp.removeEventListener('click', addFirstExpFunc);
    addFirstExp.innerHTML = '';
    addFirstExp.classList.remove("hoverablePlaceholder", "d-flex", "justify-content-center", "align-items-center");
    addExpPrompt();
}
/**
 * */
const addExp = (start, end, occupation, occupationSubtitle, responsibilities) => {
    const formatDate = (date) => {
        const dateNow = new Date();
        const yearNow = dateNow.getFullYear();
        const monthNow = dateNow.getMonth();

        const dateGiven = new Date(date);
        const year = dateGiven.getFullYear();
        const month = dateGiven.getMonth();

        const months = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return yearNow === year && monthNow === month ? 'present' : `${months[month]}. ${year}`
    }

    const responsibilitiesFormatted = responsibilities.map( sentence => `<li>${sentence}</li>` ).join('')
    const expHTML = `<div class="experienceBox">
          <p>${formatDate(start)} - ${formatDate(end)}</p>
          <div class="d-flex">
            <div class="occupation col-4">
              <p class="occupationTitle">${occupation}</p>
              <small class="occupationSubtitle">${occupationSubtitle}</small>
            </div>
            <div class="responsibilities col">
              <ul>${responsibilitiesFormatted}</ul>
            </div>
          </div>
          </div>  `;
    const parentNode = document.getElementById('experiencePlaceholder');
    parentNode.insertAdjacentHTML('beforeend', expHTML)
}
export const addFirstTool = () => {
    const callerNode = document.getElementById('addToolArea');
    callerNode.removeEventListener('click', addFirstTool);
    callerNode.remove();
    addToolPrompt();
}
/**
 * */
export const addToolPrompt = () => {
    const prompt = document.getElementById('dropZone');
    if (prompt !== null) return;

    const hintNode = document.getElementById('addToolArea');
    if (hintNode !== null) {
        hintNode.removeEventListener('click', addFirstTool);
        hintNode.remove();
    }

    const groupItem = `<div class="toolBox d-flex flex-column align-items-center hoverablePlaceholder" id="dropZone">
    <input class="toolboxName d-inline-block" type="text" placeholder="Group Name" id="groupNameInput"/>
    <p class="m-1 mt-5 mb-5" >Drag and drop icon of your tools here</p>
    <div id="imagePreviewContainer" class="d-flex justify-content-between"></div>
    <input type="file" id="fileInput" multiple style="display: none;" accept="image/*">
    <button id="addToolGroupBtn" style="margin-top: 2vw;">Add Group</button>
</div>
`;
    const parentNode = document.getElementById('toolsPlaceholder');
    parentNode.insertAdjacentHTML('beforeend', groupItem);
    addDragAndDrop();

    const imgHolder = document.getElementById('imagePreviewContainer');
    const pElement = document.querySelectorAll('#dropZone p.m-1.mt-5.mb-5')[0];

    const observer = new MutationObserver(() => {
        if (imgHolder.innerHTML !== '') {
            pElement.remove();
        }
    });
    observer.observe(imgHolder, { childList: true, subtree: true });


    const groupNameInput = document.getElementById('groupNameInput');
    groupNameInput.addEventListener('click', e => e.stopPropagation())

    const addBtn = document.getElementById('addToolGroupBtn');
    addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const groupName = document.getElementById('groupNameInput').value;
        const images = document.getElementById('imagePreviewContainer').innerHTML;
        if (images === '') {
            alert('You must add tool icons');
            return;
        }
        document.getElementById('dropZone').remove();
        addTools(groupName, images);
    })
}
const addTools = (groupName, imagesHtml) => {
    const groupHTML = `<div class="toolBox d-flex flex-column align-items-center">
    <span class="toolboxName d-inline-block">${groupName}</span>
    <div class="d-flex justify-content-between toolIcons">${imagesHtml}</div>
</div>`
    const parentNode = document.getElementById('toolsPlaceholder');
    parentNode.insertAdjacentHTML('beforeend', groupHTML);
}