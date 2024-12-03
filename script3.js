const pract = document.getElementById("pract2");
const switchSemesterBtn = document.getElementById("pract-button"); 

const semester1Data = [
    { topic: 'Основы языка HTML' },
    { topic: 'Формы и кнопки в HTML' },
    { topic: 'Таблицы и интерактивные элементы HTML' },
    { topic: 'Основы работы с CSS' },
    { topic: 'Работа с классами в CSS' },
    { topic: 'Работа с сетками и разметкой в HTML' },
    { topic: 'Адаптивная вёрстка' },
    { topic: 'Bootstrap' }
];

const semester2Data = [
    { topic: 'Базовое бэкенд-приложение' },
    { topic: 'HTTP-запросы' },
    { topic: 'JSON и работа с ним' },
    { topic: 'HTTP-ответы' },
    { topic: 'Проектирование API' },
    { topic: 'Роутинг и его настройка' },
    { topic: 'NoSQL базы данных' },
    { topic: 'Обеспечение авторизации и доступа пользователей' }
];

function displaySemesterData(data) {
    const tbody = pract.querySelector('tbody');
    tbody.innerHTML = ''; 

    data.forEach((item, index) => {
        const row = tbody.insertRow();
        const numCell = row.insertCell();
        const topicCell = row.insertCell();
        const visitCell = row.insertCell();
        const completeCell = row.insertCell();

        numCell.textContent = index + 1;
        topicCell.textContent = item.topic;
        visitCell.innerHTML = '<input type="checkbox" class="form-check-input">';
        completeCell.innerHTML = '<input type="checkbox" class="form-check-input">';
    });
}

displaySemesterData(semester1Data); 

switchSemesterBtn.addEventListener('click', () => {
    if (switchSemesterBtn.textContent === "Посмотреть практики второго семестра") {
        displaySemesterData(semester2Data);
        switchSemesterBtn.textContent = "Посмотреть практики первого семестра";
    } else {
        displaySemesterData(semester1Data);
        switchSemesterBtn.textContent = "Посмотреть практики второго семестра";
    }
});