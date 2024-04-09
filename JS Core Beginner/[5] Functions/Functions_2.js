'use strict';

function bubbleSort(arr) {
    const len = arr.length;
    // Внешний цикл проходит по всем элементам массива
    for (let i = 0; i < len; i++) {
        // Внутренний цикл сравнивает текущий элемент с последующими и меняет их местами, если необходимо
        for (let j = 0; j < len - i - 1; j++) {
            // Сравниваем текущий элемент с последующим и меняем их местами, если текущий больше последующего
            if (arr[j] > arr[j + 1]) {
                // Обмен значений местами с использованием временной переменной
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Пример использования функции
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Исходный массив:", unsortedArray);
const sortedArray = bubbleSort(unsortedArray);
console.log("Отсортированный массив:", sortedArray);
