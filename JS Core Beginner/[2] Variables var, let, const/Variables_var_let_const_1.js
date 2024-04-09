'use strict';

function testScoping() {
    if (true) {
        var xVar = 'var - видна вне блока';
        let xLet = 'let - не видна вне блока';
        const xConst = 'const - не видна вне блока';
    }

    console.log(xVar); // Видна вне блока
    console.log(xLet); // Ошибка: xLet is not defined
    console.log(xConst); // Ошибка: xConst is not defined
}

testScoping();
