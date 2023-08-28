// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі
// Вам N рік / ріки / років. Залежно від числа N слово рік має змінюватися на років або року.
// Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки.


const age = String(prompt("Ваш возраст?"));

const digit = age[age.length - 1];
const beforeLastDigit = age[age.length - 2];

let res;
if (digit == 1 && beforeLastDigit != 1) {
    res ="Вам " + age + " рiк";
} else if (digit >= 2 && digit <= 4 && beforeLastDigit != 1) {
    res ="Вам " + age + " роки";
} else {
    res ="Вам " + age + " рокiв";
}

console.log(res);