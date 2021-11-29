'use strict';

function checkNumber(number){

    let condition1; 
    let condition2;
    let condition3;

    if (number > 1000){
        console.log('Данные неверны');
    } else if (number > 1){
        for (let i = number; i > 0; i--){
            if ((number / i) == 1){
                condition1 = true;
            } else if ((number / i) == number){
                condition2 = true;
            } else if ((number % i) != 0){
                condition3 = true;
            } else if ((number % i) == 0){
                condition3 = false;
                break;
            }
        } 
        if (condition1, condition2, condition3 == true){
            console.log('число простое');
        } else {
            console.log('число составное');
        }
    } else {
        console.log('Числа 1 , 0 исключения');
    }   
}

checkNumber(547);

