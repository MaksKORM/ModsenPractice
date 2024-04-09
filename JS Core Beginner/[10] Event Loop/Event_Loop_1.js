function delayExecution(callback) {
    setTimeout(callback, 2000); // Задержка в 2 секунды (2000 миллисекунд)
}

// Пример использования функции
delayExecution(() => {
    console.log("Функция вызвана после задержки в 2 секунды");
});
