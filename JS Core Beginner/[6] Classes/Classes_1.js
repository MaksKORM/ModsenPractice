'use strict';

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

// Создание экземпляров класса "Человек"
const person1 = new Person("John", 30, "USA");
const person2 = new Person("Anna", 25, "Canada");

// Отображение сведений о каждом человеке
console.log("Person 1:");
person1.displayInfo();
console.log("Person 2:");
person2.displayInfo();
