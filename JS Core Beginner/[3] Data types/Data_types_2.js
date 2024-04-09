'use strict';

function printLastCharacter(str) {
    // Проверяем, что строка не пустая
    if (str.length === 0) {
        console.log('Строка пустая.');
    } else {
        // Выводим последний символ строки
        console.log('Последний символ строки:', str[str.length - 1]);
    }
}

// Пример использования функции
const inputString = "Hello, World!";
printLastCharacter(inputString); // Выведет '!'
