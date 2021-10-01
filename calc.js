
const display = document.getElementById('display');
const display_2 = document.getElementById('display_2');
const display_3 = document.getElementById('display_3');

let inputState_1 = '';
let inputState_2 = '';
let saveResultinput = '';
let sumbitResult = '';

const Summ = (a, b) => { return sumbitResult = (a + b) };
const Substract = (a, b) => { return sumbitResult = (a - b) };
const Divide = (a, b) => { return sumbitResult = (a / b) };
const Multiply = (a, b) => { return sumbitResult = (a * b) };
let SumbitSwitch = "";
let SumbitSwitch_2 = "";

const ResultSumbit = (SumbitSwitch, inputState_1, inputState_2) => {
    switch (SumbitSwitch){
        case "+" :
            Summ(inputState_1, inputState_2);
            break;
        case "-" :
            Substract(inputState_1, inputState_2);
            break;
        case "/" :
            Divide(inputState_1, inputState_2);
            break;
        case "*" :
            Multiply(inputState_1, inputState_2);
            break;
            default:
                sumbitResult = 0;
    }
}

//WORK WITH BUTTON SUMBIT
const buttonCalcs = document.getElementsByClassName("button_wrapper");

const NumberOrOperator = (inpt) => {
    (+inpt != NaN) ? inpt : (toString(inpt), SumbitSwitch = inpt);
}
const stateZero = () => {
    display.innerText = '', display_2.innerText = '', display_3.innerText = '', inputState_1 = '',
        inputState_2 = '', saveResultinput = '', sumbitResult = ''
}

function VakueClick(e) {
    if (display.innerText === 'HELLO' || display.innerText == 0) {
        display.innerText = '';
    }

    if ((display_3.innerText !== '') && (display_2.innerText == '') && (e)){
        stateZero()
    }

    if (e == 'DEL') {
        return display.innerText = 0, display_2.innerText = '', display_3.innerText = '', inputState_1 = '',
        inputState_2 = '', saveResultinput = '', sumbitResult = '' ;
    }

    if (e === 'CE') {
        display.innerText = display.innerText.slice(0, -1);
        return display.innerText;
    }

    if(e == 'C'){
        display.innerText = '';
        return display.innerText;
    }

    if(e == '+/-'){
        display.innerText.slice(0, -3);
        const state = display.innerText;
        const revers = ("-" + state);
        return display.innerText = revers;
    }
    // NumberOrOperator(e);ß
    display.innerText += e;

    if ( (e == '+' || e == '-' || e == '/' || e == '*') && (!saveResultinput)){
        return (
        inputState_1 = +display.innerText.slice(0, -1),
        saveResultinput = inputState_1,
        SumbitSwitch = e,
        display_2.innerText += display.innerText,
        display.innerText = ""
        )
    } 
    if ((e == '+' || e == '-' || e == '/' || e == '*') && (saveResultinput)) {
        return (
        SumbitSwitch_2 = e,
        inputState_2 = +display.innerText.slice(0, -1),
        ResultSumbit(SumbitSwitch, saveResultinput, inputState_2),
        display_3.innerText = sumbitResult,
        display_2.innerText += display.innerText,
        saveResultinput = sumbitResult,
        inputState_1 = sumbitResult,
        SumbitSwitch = SumbitSwitch_2,
        SumbitSwitch_2 = '',
        display.innerText = ''
        )
    }
    if( e == '='){
        return (
            inputState_2 = +display.innerText.slice(0, -1),
            ResultSumbit(SumbitSwitch, inputState_1, inputState_2),
            display_3.innerText = sumbitResult,
            display_2.innerText = '',
            display.innerText = ''
        )
    }
}

for (let buttonCalc of buttonCalcs) {
    buttonCalc.addEventListener('click', (e) => VakueClick(e.target.innerText))
}

