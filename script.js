const input = document.querySelector("#input");
const buttons = document.querySelector("#buttons");

let add = (a, b) => a+b;
let substract = (a, b) => a-b;
let multiply = (a, b) => a*b;
let divide = (a, b) => a/b;

let firstNumber;
let secondNumber;
let operator;

let operate = (operator, a, b) => {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return substract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

buttons.addEventListener("click", (e) => {
        
        let target = e.target;
        switch (target.id) {
            case "btn1":
                input.value += "1";
                break;
            case "btn2":
                input.value += "2";
                break;
            case "btn3":
                input.value += "3";
                break;
            case "btn+":
                input.value += "+";
                operator = "+";
                break;
            case "btn4":
                input.value += "4";
                break;
            case "btn5":
                input.value += "5";
                break;
            case "btn6":
                input.value += "6";
                break;
            case "btn-":
                input.value += "-";
                operator = "-";
                break;
            case "btn7":
                input.value += "7";
                break;
            case "btn8":
                input.value += "8";
                break;
            case "btn9":
                input.value += "9";
                break;
            case "btn*":
                input.value += "*";
                operator = "*";
                break;
            case "btn0":
                input.value += "0";
                break;
            case "btn-c":
                input.value = input.value.slice(0, -1); 
                break;
            case "btn-ac":
                input.value = "";
                break;
            case "btn/":
                input.value += "/";
                operator = "/";
                break;
            case "btn-equals":
                let numbers = input.value.split(operator);
                console.log(numbers);
                firstNumber = +numbers[0];
                console.log(firstNumber);
                secondNumber = +numbers[1];
                console.log(secondNumber);
                console.log(operator);
                if( !numbers[0] || !numbers[1]){
                    input.value = "error";
                    firstNumber = null;
                    secondNumber = null;
                    operator = null;
                    break;
                }
                input.value = `${operate(operator, firstNumber, secondNumber)}`;
                break;
        }
    });

    