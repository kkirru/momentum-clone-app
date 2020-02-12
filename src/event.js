const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94) ";
const OTHER_COLOR = "#ecf0f1";

title.addEventListener("click", handleClick);
function handleClick() {
    if (title.style.color === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
    console.log(title.style.color);
}

window.addEventListener("offline", handleOffline);

function handleOffline() {
    console.log('lla');
}

function init() {
    title.style.color = BASE_COLOR;
}

init();
