'use strict';

// task 7

let arr = [0,'hi', 5, 6, 'world', true, false, 8, null];
let arr1 = [1, 1, 1, 1, 1, 1, 1, 1];

function getElementsByArray(array){

    let oddNumber = 0;
    let evenNumber = 0;
    let numberOfZeros = 0;

    for (let index = 0; index < array.length; index++) {
        if (((array[index] % 2) == 0) && (typeof(array[index]) == 'number') && (array[index] != 0)){
            //console.log(`число ${arr[index]} - четное`);
            evenNumber += 1;
        } else if (((array[index] % 2) > 0) && (typeof(array[index]) == 'number') && (array[index] != 0)){
            //console.log(`число ${arr[index]} - нечетное`);
            oddNumber += 1;
        } else if (array[index] == 0 && (typeof(array[index]) == 'number')){
            //console.log(`число ${arr[index]} - 0`);
            numberOfZeros += 1;
        }

    }

    console.log(`Кол-во четных чисел в массиве ${evenNumber}`);
    console.log(`Кол-во нечетных чисел в массиве ${oddNumber}`);
    console.log(`Кол-во 0 в массиве ${numberOfZeros}`);
}
getElementsByArray(arr1);