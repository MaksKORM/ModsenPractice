'use strict';

// Функция для загрузки содержимого URL-адреса
function fetchContent(url) {
    return new Promise((resolve, reject) => {
        // Имитируем загрузку содержимого URL-адреса
        setTimeout(() => {
            console.log("Загружено содержимое по адресу:", url);
            resolve(`Содержимое URL ${url}`);
        }, Math.random() * 2000); // Имитация случайной задержки от 0 до 2 секунд
    });
}

// Функция для параллельной загрузки содержимого всех URL-адресов
function parallelFetch(urls) {
    // Создаем массив промисов для загрузки содержимого каждого URL-адреса
    const promises = urls.map(url => fetchContent(url));

    // Возвращаем общий промис, разрешающийся после завершения всех загрузок
    return Promise.all(promises);
}

// Пример использования функции
const urls = ['https://example.com/page1', 'https://example.com/page2', 'https://example.com/page3'];

parallelFetch(urls)
    .then(contents => {
        console.log("Загружено содержимое всех URL-адресов:");
        contents.forEach(content => console.log(content));
    })
    .catch(error => {
        console.error("Ошибка загрузки:", error);
    });
