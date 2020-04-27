"use strict";

//// Задача 1

// let name = '"Генератор защитного поля"';
// let price = 1000;

// const namePrice = `Выбран ${name}, цена за штуку ${price} кредитов.`;

// console.log(namePrice);
// price = 2000;

// const namePrice2 = `Выбран ${name}, цена за штуку ${price} кредитов.`;

// console.log(namePrice);

////Задача 2

// const total = 100;
// const ordered = 50;
// let message;

// // if (ordered > total) {
// //     message = confirm ("На складе недостаточно товаров!");
// // } else {
// //     message = confirm ( "Заказ оформлен, с вами свяжется менеджер") ;
// // }

// Ternary;

// const order =
//   ordered > total
//     ? confirm("На складе недостаточно товаров!")
//     : confirm("Заказ оформлен, с вами свяжется менеджер");

////Задача 3

// const ADMIN_PASSWORD = "qwe";
// let message = prompt("Введите пароль");

// if (message === null) {
//   message = confirm("Отменено пользователем!");
// } else if (message === ADMIN_PASSWORD) {
//   message = confirm("Добро пожаловать!");
// } else {
//   message = confirm("Доступ запрещен, неверный пароль!");
// }

// alert(message);

////Задача 4

// let credits = 23580;
// let pricePerDroid = 3000;
// let totalPrice;
// let howMuch;
// let balance;

// howMuch = prompt("Введите количество");

// if (howMuch === null) {
//   alert("ОhowMuchтменено пользователем!");
// } else if (Number(howMuch) * pricePerDroid > credits) {
//   alert("Недостаточно средств на счету!");
// } else {
//   totalPrice = howMuch * pricePerDroid;
//   balance = credits - totalPrice;

//   alert(`Вы купили ${howMuch} дроидов, на счету осталось ${balance} кредитов.`);
// }

// console.log(totalPrice);

////Задача 5

// let cost;
// let country;

// country = prompt("Введите страну доставки").toLowerCase();

// switch (country) {
//   case "китай":
//     cost = 100;
//     country = country.charAt(0).toUpperCase() + country.slice(1);
//     confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

//     break;

//   case "чили":
//     cost = 250;
//     country = country.charAt(0).toUpperCase() + country.slice(1);
//     confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

//     break;

//   case "австралия":
//     cost = 170;
//     country = country.charAt(0).toUpperCase() + country.slice(1);
//     confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

//     break;

//   case "индия":
//     cost = 80;
//     country = country.charAt(0).toUpperCase() + country.slice(1);
//     confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

//     break;

//   case "ямайка":
//     cost = 120;
//     country = country.charAt(0).toUpperCase() + country.slice(1);
//     confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

//     break;

//   default:
//     alert("В вашей стране доставка не доступна");
// }

////Задача 6

// let input;
// let total = 0;

// while (input !== null) {
//   input = prompt("Ввведите число");
//   total += Number(input);
// }
// if (input === null) {
//   alert(`Общая сумма чисел равна ${total}`);
// }

//// задание 6 вариант 2

// for (let total = 0; input !== null; total += Number(input)) {
//   input = prompt("Введите число");
//   total += Number(input);
//   console.log(total);

//   if (input === null) {
//     alert(`Общая сумма чисел равна ${(total += Number(input))}`);
//   }
// }
