!function() {
    'use strict'

    // prompt user for a maximum integer and parse the string to an integer

    var number = parseInt(prompt("Please enter a number:", 0), 10);
    
    checkNumber(number);

    // if parseInt evaluates to NaN, re-prompt

    function checkNumber(n) {
        do {
            number = parseInt(prompt("Please enter a number:", 0), 10);
        } while(isNaN(number)); 
    }
      
    // create ul element to hold result of FizzBuzz function

    var ul = document.querySelector('ul'); 

    function presentToConsole(result) {
        console.log(result);
    }

    function presentToDOM(result) {
        var li = document.createElement('li');
        li.innerText = result;
        ul.appendChild(li);
    }

    function fizzBuzz(number, present) {
        for (var i = 1; i <= number; i++) {
            present(check(i));
        }
    }

    function check(value) {
        var ret = value;

        if (((value % 3) === 0) && ((value % 5) === 0)) {
            ret = 'FizzBuzz';
        } else if ((value % 3) === 0) {
            ret = 'Fizz';
        } else if ((value % 5) === 0) {
            ret = 'Buzz';
        }

        return ret;
    }

    console.log('number', number);

    fizzBuzz(number, presentToDOM);
    fizzBuzz(number, presentToConsole);

    
}();
