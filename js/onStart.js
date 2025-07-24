import {loadOnStartup} from "./storage.js";

function adjustColumnHeights() {
    const boxes = document.querySelectorAll('section#name-row div.column-box');
    const firstBox = boxes[0];
    if (firstBox) {
        const width = firstBox.offsetWidth;
        boxes.forEach(box => box.style.height = `${width}px`);
    }
}

window.addEventListener('DOMContentLoaded', adjustColumnHeights);
window.addEventListener('resize', adjustColumnHeights);
loadOnStartup();
