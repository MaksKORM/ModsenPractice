'use strict';

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Метод для расчета площади прямоугольника
    calculateArea() {
        return this.width * this.height;
    }

    // Метод для расчета периметра прямоугольника
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Создание экземпляра класса "Прямоугольник"
const rectangle = new Rectangle(5, 10);

// Вычисление площади и периметра прямоугольника
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

// Вывод результатов
console.log("Площадь прямоугольника:", area);
console.log("Периметр прямоугольника:", perimeter);
