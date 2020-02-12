const body = document.querySelector("body");
const IMG_NUMBER = 6;


function init() {
    paintImg();
}

function paintImg() {
    const imgNum = getRandom();
    const img = new Image();
    img.classList.add("bgImage");

    img.src = `../img/${imgNum + 1}.jpg`
    body.appendChild(img);
}



init();

function getRandom() {
    return Math.floor(Math.random() * IMG_NUMBER);

}