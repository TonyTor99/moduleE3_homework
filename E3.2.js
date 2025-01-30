// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

const arr = [0, 1, 2, null, 3, 4, 5, 6, 7, 0, true];

function countEvenOddZero(array) {
    let even = 0;
    let odd = 0;
    let zero = 0;

    for (let item of array) {
        if (item === 0) {
            zero++;
        } else if (item % 2 === 0 && typeof item === 'number') {
            even++;
        } else if (item % 2 === 1 && typeof item === 'number') {
            odd++;
        }
    }
    console.log(`Четные - ${even}, Не четные - ${odd}, Нулей - ${zero}`);
}

countEvenOddZero(arr);
