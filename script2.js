const h1 = document.querySelector('h1');
const logotype = document.getElementById("logo");
h1.onclick = function(event){
    alert('Вы кликнули на заголовок - так держать!');
}

logotype.addEventListener('mouseover', function() {
    this.style.width = '50px';
    this.style.height = '50px';
});


logotype.addEventListener('mouseout', function() {
    this.style.width = '40px';
    this.style.height = '40px';
    this.style.transform = 'scale(1)';
});

logotype.onclick = function(event) {
    this.src = "pics/professor.png";
    this.style.width = '60px';
    this.style.height = '60px';
    this.style.transform = 'scale(1)';
};
logotype.ondblclick = function(event){
    alert('Не налегай, у меня не так много любимых преподавателей');
};

document.addEventListener('DOMContentLoaded', function() {


    function showMessage(message) {
        console.log(message);
    }

    function logCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        console.log(`${hours}:${minutes}:${seconds}`);
    }

    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }
    function resetBackgroundColor() {
        document.body.style.backgroundColor = 'white';
    }

    function toggleVisibility(selector) {
        const element = document.querySelector(selector);
        if (element) {
        element.style.display = element.style.display === "none" ? "block" : "none";
        } else {
        console.error(`Элемент с селектором "${selector}" не найден.`);
        }
    }

    function updateH1FromUtmTerm() {
        const urlParams = new URLSearchParams(window.location.search);
        const utmTerm = urlParams.get("utm_term");

        const h1Element = document.querySelector("h1");
        if (h1Element) {
        h1Element.textContent = utmTerm || "Заголовок по умолчанию";
        } else {
        console.error("Элемент H1 не найден.");
        }
    }

    showMessage("Скрипт загружен!");
    changeBackgroundColor("lightblue");
    toggleVisibility(".header-name");
    updateH1FromUtmTerm();
    logCurrentTime(); 
    resetBackgroundColor();
});
