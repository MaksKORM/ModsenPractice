// Функция для выполнения запроса с таймаутом
async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController(); // Создаем новый AbortController
    const signal = controller.signal; // Получаем сигнал от контроллера

    // Устанавливаем таймер для отмены запроса
    const timeoutId = setTimeout(() => {
        controller.abort(); // Отменяем запрос по истечении времени
    }, timeout);

    try {
        // Выполняем запрос с использованием fetch и сигнала для отмены
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId); // Очищаем таймер, так как запрос выполнен

        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }

        // Возвращаем данные из ответа
        return await response.json();
    } catch (error) {
        // Если запрос был отменен, ловим исключение AbortError
        if (error.name === 'AbortError') {
            console.error('Запрос отменен из-за превышения времени ожидания');
        } else {
            console.error(`Ошибка загрузки данных: ${error.message}`);
        }
        throw error; // Перебрасываем ошибку дальше
    }
}

// Пример использования функции
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const timeout = 3000; // Время ожидания в миллисекундах (3 секунды)

fetchDataWithTimeout(url, timeout)
    .then(data => {
        console.log('Данные успешно загружены:', data);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error.message);
    });
