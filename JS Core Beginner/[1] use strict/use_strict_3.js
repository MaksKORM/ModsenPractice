'use strict';

function countVowels(str) {
    const vowelsRegex = /[aeiou]/gi;
    const matches = str.match(vowelsRegex);
    if (!matches) {
        return 0;
    }
    return matches.length;
}

const str = "modsen";
console.log(`Количество гласных букв в строке: ${countVowels(str)}`);
