
var circleOp;
var userIn;
var userIn2;

function calculate3(){
    var retval
    userIn = parseFloat(document.getElementById("userInput").value);
    userIn2 = parseFloat(document.getElementById("userInput2").value);
    circleOp = document.getElementById("circleOps").value;
    retval = docalculation(userIn, circleOp);
    document.getElementById("results").innerHTML = "The result is = " + retval;
}

function docalculation(userIn, operation='circle') {

var results = 0;
var pi = 3.14;

var operand = operation;
switch (operand) {
    case 'circ':
        results = 2 * pi * userIn;
        break;
    case 'area':
        results = pi * (userIn * userIn);
        break;
    case 'dia':
        results = userIn * 2;
        break;
    case 'rad':
        results = userIn / 2;
        break;
    case 'rect':
        results = userIn * userIn2;
        break;
    default: 
    results = userIn + 0;
        break;

}
return results;
}

function selected(oObject) {
    var selectedValue = oObject.options[oObject.selectedIndex].value;
    var userInput2 = document.getElementById('userInput2');

    userInput2.disabled = false; // false by default

    if (selectedValue == 'rect') {
        userInput2.disabled = false;
    }else {
        userInput2.disabled = true;
    }
}


// for caluclating basic math section

var num1;
var num2;
var mathFunk;

function calculate2(){
    var returnedvalue;

    var num1 = parseFloat(document.getElementById('num1').value);
    var num2= parseFloat(document.getElementById('num2').value);
    var mathFunk = document.getElementById('simpleMath').value;
    returnedvalue = docalculation(num1, num2, mathFunk);
    document.getElementById("answer").innerHTML = "The result is = " + returnedvalue;

    function docalculation(num1, num2, operation='+') {

    var answer = 0;
    var operand = operation;
    switch (operand) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        default: 
        answer = userIn + 0;
            break;
    
    }
    return answer;
    }
}