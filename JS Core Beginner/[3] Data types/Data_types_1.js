'use strict';

function compareObjects(obj1, obj2) {
    // Получаем массив ключей (свойств) объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Проверяем количество свойств в объектах
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Перебираем ключи первого объекта
    for (let key of keys1) {
        // Проверяем, есть ли свойство с таким же ключом во втором объекте
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }

        // Сравниваем значения свойств
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // Если все свойства эквивалентны, возвращаем true
    return true;
}

// Пример использования функции
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };

console.log(compareObjects(obj1, obj2)); // Выведет true
console.log(compareObjects(obj1, obj3)); // Выведет false
