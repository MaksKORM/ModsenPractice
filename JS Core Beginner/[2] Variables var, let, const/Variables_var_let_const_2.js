'use strict';

function testRedeclaration() {
    var xVar = 1;
    let xLet = 2;
    const xConst = 3;

    var xVar = 4; // Повторное объявление переменной с использованием var
    // let xLet = 5; // Ошибка: Identifier 'xLet' has already been declared
    // const xConst = 6; // Ошибка: Identifier 'xConst' has already been declared

    console.log(xVar); // Выведет 4
    console.log(xLet);
    console.log(xConst);
}

testRedeclaration();
