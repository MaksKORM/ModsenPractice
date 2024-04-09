'use strict';

function testHoisting() {
    console.log(xVar); // Выведет undefined
    // console.log(xLet); // Ошибка: Cannot access 'xLet' before initialization
    // console.log(xConst); // Ошибка: Cannot access 'xConst' before initialization

    var xVar = 1;
    let xLet = 2;
    const xConst = 3;
}

testHoisting();
