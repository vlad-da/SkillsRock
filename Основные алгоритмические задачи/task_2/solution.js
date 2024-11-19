function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 !== 0) {
            console.log('Fizz');
            continue;
        }
        if (i % 5 == 0 && i % 3 !== 0) {
            console.log('Buzz');
            continue;
        }

        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
            continue;
        }

        console.log(i);
    }
}
fizzBuzz()
