// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення,
//що вказує, чи є введений рік високосним.

const yearForCheck = prompt("Введите год,для проверки на высокосность:")

if ((yearForCheck % 4 === 0 && yearForCheck % 100 !== 0) || yearForCheck % 400 === 0){
    console.log(`Год ${yearForCheck} является высокосным`)
} else{
    console.log(`Год ${yearForCheck} не является высокосным`)
}