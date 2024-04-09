function generateRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1; // Генерация случайного числа от 1 до 10
        const delayInSeconds = randomNumber; // Задержка в секундах соответствует сгенерированному числу

        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(randomNumber); // Промис успешно выполняется для чисел от 1 до 5
            } else {
                reject(new Error(`Сгенерировано число от 6 до 10: ${randomNumber}`)); // Промис завершается с ошибкой для чисел от 6 до 10
            }
        }, delayInSeconds * 1000); // Переводим задержку в миллисекунды
    });
}

// Пример использования функции
generateRandomNumberWithDelay()
    .then(randomNumber => {
        console.log('Сгенерировано случайное число от 1 до 5:', randomNumber);
    })
    .catch(error => {
        console.error('Ошибка:', error.message);
    });
