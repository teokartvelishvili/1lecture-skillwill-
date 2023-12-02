function calc(a, b) {
    if (a === b) {
        return ("ტოლია")
    }
    else
 {
    return ("არ არის ტოლი")
 }
}
console.log(calc(4, 6));

function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit == NaN) {
        return false
    }   else{
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius
}
}
console.log(fahrenheitToCelsius(22))


function performOperation(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return false;
            }
        default:
            return false; 
    }
}

let num1 = 10;
let num2 = 5;
let additionResult = performOperation(num1, num2, '+');
console.log("Addition:", additionResult);

let subtractionResult = performOperation(num1, num2, '-');
console.log("Subtraction:", subtractionResult);

let multiplicationResult = performOperation(num1, num2, '*');
console.log("Multiplication:", multiplicationResult);

let divisionResult = performOperation(num1, num2, '/');
console.log("Division:", divisionResult);


let invalidResult = performOperation("not a number", 5, '+');
console.log("Invalid Input:", invalidResult);