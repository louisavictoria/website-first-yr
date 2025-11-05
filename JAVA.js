


const backButton = document.getElementById("backButton");
const button = backButton.querySelector(".btn2 btn-transparent");

button.addEventListener("click", goBack);

function goBack() {
    window.history.back();
}