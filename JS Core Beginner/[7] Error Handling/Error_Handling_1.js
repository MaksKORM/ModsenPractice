'use strict';

function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Введенное число не является целым числом');
    }
}

// Пример использования функции
try {
    checkInteger(5); // Попробуем передать целое число
    console.log("Число является целым.");
    
    checkInteger(3.14); // Попробуем передать дробное число
    console.log("Число является целым.");
} catch (error) {
    console.error("Ошибка:", error.message);
}
