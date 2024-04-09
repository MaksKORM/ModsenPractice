'use strict';

function isInArray(array, value) {
    return array.includes(value);
}

const arr = [1, 2, 3, 4, 5];
const value = 3;
console.log(`Значение ${value} ${isInArray(arr, value) ? 'присутствует' : 'отсутствует'} в массиве.`);
