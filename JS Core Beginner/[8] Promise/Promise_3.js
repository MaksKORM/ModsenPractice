'use strict';

// Функция для имитации извлечения данных из API
function fetchDataFromAPI(api) {
    return new Promise((resolve, reject) => {
        // Имитируем запрос к API
        setTimeout(() => {
            // Генерируем случайные данные
            const data = {
                api: api,
                value: Math.floor(Math.random() * 100) + 1
            };
            console.log(`Извлечены данные из API ${api}:`, data);
            resolve(data);
        }, Math.random() * 2000); // Имитация случайной задержки от 0 до 2 секунд
    });
}

// Функция для одновременного извлечения данных из нескольких API
function fetchAllDataFromAPIs(apis) {
    // Создаем массив промисов для извлечения данных из каждого API
    const promises = apis.map(api => fetchDataFromAPI(api));

    // Возвращаем промис, который разрешается после завершения всех запросов
    return Promise.all(promises);
}

// Пример использования функции
const apis = ['api1', 'api2', 'api3'];

fetchAllDataFromAPIs(apis)
    .then(dataArray => {
        console.log("Извлечены данные из всех API:");
        dataArray.forEach(data => console.log(data));
    })
    .catch(error => {
        console.error("Ошибка извлечения данных:", error);
    });
