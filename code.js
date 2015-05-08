! function () {

    var number = prompt("Please enter a number:", 0);
    number = parseInt(number, 10);

    console.log('number', number);

    var $ul = document.querySelector('ul');

    function presentToConsole(result) {
        console.log(result);
    }

    function presentToDOM(result) {
        var $li = document.createElement('li');
        $li.innerText = result;
        $ul.appendChild($li);
    }

    function check(value) {
        var ret = value;
    }

    if (((value % 3) === 0) && ((value % 5) === 0)) {
        ret = 'FizzBuzz';
    } else if ((value % 3) === 0) {
        ret = 'Fizz';
    } else if ((value % 5) === 0) {
        ret = 'Buzz';
    }

    return ret;
}

function fizzBuzz(number, present) {
    for (var i = 1; i <= number; i++) {
        present(check(i));
    }
}

fizzbuzz(number, presentToDOM);
fizzbuzz(number, presentToConsole);
}();