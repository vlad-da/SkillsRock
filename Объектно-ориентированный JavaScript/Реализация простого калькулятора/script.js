class Calculator {
    add(a, b) {
        console.log(a + b);
        return a + b;
    }
    subtract(a, b) {
        console.log(a - b);
        return a - b;
    }
    multiply(a, b) {
        console.log(a * b);
        return a * b;
    }
    divide(a, b) {
        if(b === 0) {
            throw new Error("b равно 0");
        }
        console.log(a / b);
        return a / b;
    }
}
   
new Calculator().add(3,4); //7
new Calculator().subtract(3,4); //-1
new Calculator().multiply(3,4); //12
new Calculator().divide(3,4); //0.75