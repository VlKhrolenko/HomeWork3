//Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення залежно від значення числа.
//Якщо число ділиться на 3, то повідомлення має бути Fizz, якщо число ділиться на 5, то повідомлення має бути Buzz,
//а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz.
// Наприклад, для числа 15 повідомлення має бути FizzBuzz.

const num =prompt("Введите число:");

if(num%3 < 1 && num%5<1){
    console.log("FizzBuzz")
}else if(num%3 < 1){
    console.log("Fizz")
}else if(num%5<1){
    console.log("Buzz")
}

