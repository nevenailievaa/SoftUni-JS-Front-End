function simpleCalculator(firstNum, secondNum, operator) {
    if (operator == 'multiply') {
        console.log(firstNum * secondNum);
    } else if (operator == 'divide'){
        console.log(firstNum / secondNum);
    } else if (operator == 'add'){
        console.log(firstNum + secondNum);
    } else if (operator == 'subtract'){
        console.log(firstNum - secondNum);
    }
}