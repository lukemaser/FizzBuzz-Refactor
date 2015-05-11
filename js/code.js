!function() {
    'use strict'

    var number = prompt("Please enter a number:", 0);
        number = parseInt(number, 10);


        //isNaN = prompt("Please enter a number:", 0);
       function checkNumber(n) {
            if (isNaN(n) )
                prompt("Please enter an integer:", 0);
            else 
        }

        checkNumber(number);
        

    var $ul = document.querySelector('ul');
 

    console.log('number', number);

    function presentToConsole(result) {
        console.log(result);
    }

    function presentToDOM(result) {
        var $li = document.createElement('li');
        $li.innerText = result;
        $ul.appendChild($li);
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

    fizzBuzz(number, presentToDOM);
    fizzBuzz(number, presentToConsole);

    
}();
