const title = document.querySelector("#title");

const CLICKED_ClASS = "clicked";

function init() {
    title.addEventListener("click", handleClicked);
}

init();

function handleClicked() {
    // *** toggle > contains, add, remove를 한 줄로
    title.classList.toggle(CLICKED_ClASS);

    console.log(currnetClassName);
}
