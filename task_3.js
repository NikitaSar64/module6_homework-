'use strict';

function funcOne(a){
    return function funcTwo(b){
        return a + b;
    };
}

let number = funcOne(4);

console.log(number(5));