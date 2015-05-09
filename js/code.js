!function() {
    'use strict'

    var number = prompt("Please enter a number:", 0),
        number = parseInt(number, 10);

    console.log('number', number);

    function presentToConsole(result) {
        console.log(result);
    }

    var $ul = document.querySelector('ul');

    function presentToDOM(result) {
        var $li = document.createElement('li');
        $li.innerText = result;
        $ul.appendChild($li);
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

    fizzBuzz(number, presentToDOM);
    fizzBuzz(number, presentToConsole);

    function fizzBuzz(number, present) {
        for (var i = 1; i <= number; i++) {
            present(check(i));
        }
    }
}();
