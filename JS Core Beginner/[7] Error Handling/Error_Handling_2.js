'use strict';

function accessUndefinedProperty(obj) {
    try {
        // Пытаемся получить доступ к неопределенному свойству объекта
        const value = obj.undefinedProperty;
        console.log("Значение свойства:", value); // Этот код не выполнится, если произошла ошибка
    } catch (error) {
        // Перехватываем ошибку TypeError и выводим сообщение об ошибке
        console.error("Ошибка:", error.message);
    }
}

// Пример использования функции
const obj = {}; // Объект без свойства undefinedProperty
accessUndefinedProperty(obj);
