'use strict';

function number (start, stop) {
    let timerId = setInterval(function(){
        console.log(start);
        if (start == stop){
            clearInterval(timerId);
        }
        start++;
    }, 1000);
}

number(5, 15);


