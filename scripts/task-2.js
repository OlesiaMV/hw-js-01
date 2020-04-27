"use strict";

////Задача 2

const total = 100;
const ordered = 50;
let message;

if (ordered > total) {
    message = confirm ("На складе недостаточно товаров!");
} else {
    message = confirm ( "Заказ оформлен, с вами свяжется менеджер") ;
}

// Ternary

const order =
  ordered > total
    ? confirm("На складе недостаточно товаров!")
    : confirm("Заказ оформлен, с вами свяжется менеджер");