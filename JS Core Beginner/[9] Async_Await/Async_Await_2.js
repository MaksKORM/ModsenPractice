'use strict';

// Функция для загрузки данных с сервера 1
async function fetchDataFromServer1() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных с сервера 1');
        }
        const data = await response.json();
        console.log("Данные с сервера 1 загружены успешно:", data);
        return data;
    } catch (error) {
        throw new Error(`Ошибка загрузки данных с сервера 1: ${error.message}`);
    }
}

// Функция для отправки данных на сервер 2
async function sendDataToServer2(data) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Ошибка отправки данных на сервер 2');
        }
        const responseData = await response.json();
        console.log("Данные отправлены на сервер 2 успешно:", responseData);
        return responseData;
    } catch (error) {
        throw new Error(`Ошибка отправки данных на сервер 2: ${error.message}`);
    }
}

// Функция для выполнения последовательных запросов
async function sequentialRequests() {
    try {
        // Загружаем данные с сервера 1
        const dataFromServer1 = await fetchDataFromServer1();

        // Используем загруженные данные для отправки на сервер 2
        const responseData = await sendDataToServer2(dataFromServer1);
        return responseData;
    } catch (error) {
        console.error("Ошибка выполнения последовательных запросов:", error.message);
    }
}

// Пример использования функции
sequentialRequests();
