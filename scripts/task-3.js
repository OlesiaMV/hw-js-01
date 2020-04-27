"use strict";

////Задача 3

const ADMIN_PASSWORD = "qwe";
let message = prompt("Введите пароль");

if (message === null) {
  message = confirm("Отменено пользователем!");
} else if (message === ADMIN_PASSWORD) {
  message = confirm("Добро пожаловать!");
} else {
  message = confirm("Доступ запрещен, неверный пароль!");
}

alert(message);