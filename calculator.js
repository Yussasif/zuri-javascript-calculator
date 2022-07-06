let firstNumber = parseInt(prompt("Enter First Number"))
let operator = prompt("Enter OPerator *+-/: ");
let secondNumber = parseInt(prompt("Enter Second Number"));
let result;
if (typeof firstNumber != "number" && typeof secondNumber != "number") {
    alert("Enter a valid Number")
    }
    else{
        if (operator == "*" || operator == "-" || operator == "%" ||operator == "+"|| operator == "/"){
        
            result = firstNumber + operator + secondNumber;
            alert(eval(result));
           
        }
        else{
            alert("Enter a valid Operator")
        }
    }


