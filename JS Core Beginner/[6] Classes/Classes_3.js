'use strict';

// Класс "Сотрудник"
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // Метод для расчета годовой зарплаты
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Подкласс "Менеджер", который наследуется от класса "Сотрудник"
class Manager extends Employee {
    constructor(name, salary, department) {
        // Вызов конструктора родительского класса
        super(name, salary);
        this.department = department;
    }

    // Переопределение метода расчета годовой зарплаты
    calculateAnnualSalary() {
        // Дополнительный бонус для менеджеров (20% от годовой зарплаты)
        const bonus = this.salary * 0.2;
        // Вызов метода родительского класса и добавление бонуса
        return super.calculateAnnualSalary() + bonus;
    }
}

// Создание экземпляров класса "Менеджер"
const manager1 = new Manager("John", 50000, "Marketing");
const manager2 = new Manager("Alice", 60000, "Finance");

// Расчет годовой зарплаты для каждого менеджера
const annualSalary1 = manager1.calculateAnnualSalary();
const annualSalary2 = manager2.calculateAnnualSalary();

// Вывод результатов
console.log(`${manager1.name} (${manager1.department}): ${annualSalary1}`);
console.log(`${manager2.name} (${manager2.department}): ${annualSalary2}`);
