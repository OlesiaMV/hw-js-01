"use strict";

////Задача 4

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let howMuch;
let balance;

howMuch = prompt("Введите количество");

if (howMuch === null) {
  alert("ОhowMuchтменено пользователем!");
} else if (Number(howMuch) * pricePerDroid > credits) {
  alert("Недостаточно средств на счету!");
} else {
  totalPrice = howMuch * pricePerDroid;
  balance = credits - totalPrice;

  alert(`Вы купили ${howMuch} дроидов, на счету осталось ${balance} кредитов.`);
}

console.log(totalPrice);