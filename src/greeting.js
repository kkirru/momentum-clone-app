const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings")
// renameBtn = document.querySelector(".js-rename-btn");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function init() {
    loadName();
    // renameBtn.addEventListener("click", onClickRenameBtn);
}

// function onClickRenameBtn() {
//     localStorage.removeItem(USER_LS);
//     loadName();
// }

function paintGreeting(currentUser) {
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Welcome ${currentUser}!`;
}

function handleSubmit(event) {
    event.preventDefault(); // 제출했을 때 내용이 사라지게 만드는 것을 막음
    localStorage.setItem(USER_LS, input.value);
    loadName();
}

function askName() {
    greetings.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
    // form.removeEventListener("submit");
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askName();
    } else {
        paintGreeting(currentUser);
    }


}

init(); 