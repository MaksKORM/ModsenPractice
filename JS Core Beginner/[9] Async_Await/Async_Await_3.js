'use strict';

// Функция для загрузки данных с удаленного сервера
async function fetchDataFromServer(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных с сервера ${url}`);
        }
        const data = await response.json();
        console.log(`Данные с сервера ${url} загружены успешно:`, data);
        return data;
    } catch (error) {
        throw new Error(`Ошибка загрузки данных с сервера ${url}: ${error.message}`);
    }
}

// Функция для параллельной загрузки данных с нескольких серверов
async function parallelRequests(urls) {
    try {
        // Создаем массив промисов для загрузки данных с каждого URL
        const promises = urls.map(url => fetchDataFromServer(url));

        // Ждем выполнения всех промисов параллельно с помощью Promise.all
        const results = await Promise.all(promises);

        console.log("Данные загружены успешно.");
        return results;
    } catch (error) {
        console.error("Ошибка загрузки данных:", error.message);
    }
}

// Пример использования функции
const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2', 'https://jsonplaceholder.typicode.com/posts/3'];

parallelRequests(urls);
