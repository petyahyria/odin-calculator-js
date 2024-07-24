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

// parameter setOperator is operator that we want to set. 
// Named like that because we already have global variable called operator
let setOperator = (setOperator) => {
    if(operator === null || operator === undefined){
        operator = setOperator;
    }else{
        equals();
        operator = setOperator;
    }
}

let equals = () => {
    let numbers = input.value.split(operator);
    firstNumber = +numbers[0];
    console.log(firstNumber);
    secondNumber = +numbers[1];
    if( !numbers[0] || !numbers[1] || operator === "/" && secondNumber === 0) {
        input.value = "error";
        firstNumber = null;
        secondNumber = null;
        operator = null;
    }else{
        input.value = `${operate(operator, firstNumber, secondNumber)}`;
        firstNumber = +input.value;
        operator = null;
        secondNumber = null;
    }
}

buttons.addEventListener("mousedown", (e) => {
    let target = e.target;
    if(target.id.includes("btn")){
        target.style.backgroundColor = "#fff";
        target.style.border = "2px solid #034078";
    }
})

buttons.addEventListener("mouseup", (e) => {      
    let target = e.target;
    if(target.id.includes("btn")){
        target.style.backgroundColor = "#B0C6CE";
        target.style.border = "2px solid #0A1128";
    }
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
            setOperator("+");
            input.value += "+";
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
            setOperator("-");
            input.value += "-";
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
            setOperator("*");
            input.value += "*";
            break;
        case "btn0":
            input.value += "0";
            break;
        case "btn-c":
            input.value = input.value.slice(0, -1); 
            break;
        case "btn-ac":
            input.value = "";
            firstNumber = null;
            secondNumber = null;
            operator = null;
            break;
        case "btn/":
            setOperator("/")
            input.value += "/";
            break;
        case "btn-equals":
            equals();
            break;
    }
});

addEventListener("keydown", (e) => {
    switch (e.key) {
        case "Backspace":
            input.value = input.value.slice(0, -1); 
            break;
        case "1":
            input.value += "1";
            break;
        case "2":
            input.value += "2";
            break;
        case "3":
            input.value += "3";
            break;
        case "+":
            setOperator("+");
            input.value += "+";
            break;
        case "4":
            input.value += "4";
            break;
        case "5":
            input.value += "5";
            break;
        case "6":
            input.value += "6";
            break;
        case "-":
            setOperator("-");
            input.value += "-";
            break;
        case "7":
            input.value += "7";
            break;
        case "8":
            input.value += "8";
            break;
        case "9":
            input.value += "9";
            break;
        case "*":
            setOperator("*");
            input.value += "*";
            break;
        case "0":
            input.value += "0";
            break;
        case "/":
            setOperator("/")
            input.value += "/";
            break;
        case "=":
            equals();
            break;    
        case "Enter":
            equals();
            break;    

    }
});