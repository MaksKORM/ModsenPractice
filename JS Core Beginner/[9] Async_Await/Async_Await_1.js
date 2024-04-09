'use strict';

// Функция для загрузки данных с удаленного сервера с использованием async/await
async function fetchDataFromServer(url) {
    try {
        // Выполняем запрос к серверу
        const response = await fetch(url);

        // Проверяем, что ответ сервера успешный (статус 200)
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        // Получаем данные из ответа сервера в формате JSON
        const data = await response.json();
        console.log("Данные загружены успешно:", data);

        // Возвращаем полученные данные
        return data;
    } catch (error) {
        // В случае ошибки выбрасываем исключение
        throw new Error(`Ошибка загрузки данных: ${error.message}`);
    }
}

// Пример использования функции
async function exampleUsage() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
        const result = await fetchDataFromServer(url);
        console.log("Полученный результат:", result);
    } catch (error) {
        console.error("Ошибка:", error.message);
    }
}

// Вызываем пример использования функции
exampleUsage();
