'use strict';

function firstNonRepeatingCharacter(str) {
    // Создаем объект для подсчета количества вхождений каждого символа
    const charCount = {};

    // Проходим по строке и заполняем объект charCount
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Ищем первый символ, у которого количество вхождений равно 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Если такого символа не найдено, возвращаем null
    return null;
}

// Пример использования функции
const str = "abacabad";
const result = firstNonRepeatingCharacter(str);
console.log("Первый неповторяющийся символ:", result);
