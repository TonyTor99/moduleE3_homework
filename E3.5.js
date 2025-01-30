// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.

function firstArg(a) {
    return function secondArg(b) {
        return console.log(a + b);
    }
}

const sumArgs = firstArg(3)
sumArgs(2)