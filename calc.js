
const display = document.getElementById('display');
const display_2 = document.getElementById('display_2');
const display_3 = document.getElementById('display_3');

let inputState_1 = '';
let inputState_2 = '';
let saveResultinput = '';
let sumbitResult = '';
let inputValue = [];
let lastInputValue = '';
let pressDel = false;

const Summ = (a, b) => { return sumbitResult = (a + b) };
const Substract = (a, b) => { return sumbitResult = (a - b) };
const Divide = (a, b) => { 
  if(b === 0) {
    return sumbitResult = 0;
  }
  else {
    return sumbitResult = (Math.floor((a / b)*100000)/10000) };
  }
const Multiply = (a, b) => { return sumbitResult = (a * b) };

let SumbitSwitch = "";
let SumbitSwitch_2 = "";

const ResultSumbit = (SumbitSwitch, inputState_1, inputState_2) => {
  switch (SumbitSwitch) {
    case "+":
      Summ(inputState_1, inputState_2);
      break;
    case "-":
      Substract(inputState_1, inputState_2);
      break;
    case "/":
      Divide(inputState_1, inputState_2);
      break;
    case "*":
      Multiply(inputState_1, inputState_2);
      break;
    default:
      sumbitResult = 0;
  }
}

//WORK WITH BUTTON SUMBIT
const buttonCalcs = document.getElementsByClassName("button_wrapper");

const stateZero = () => {
  display.innerText = '', display_2.innerText = '', display_3.innerText = '', inputState_1 = '',
    inputState_2 = '', saveResultinput = '', sumbitResult = ''
}

function ValueClick(e) {

  if(display.innerText.length == 26){
    if (!(e == '+' || e == '-' || e == '/' || e == '*' || e == "+/-" || e == 'DEL' || e == 'C'  || e == 'CE' || e == '=')) return
  } 

  if (pressDel && (e !== '.')) {
    display.innerText = '', pressDel = false
  } else {
    pressDel = false
  };

  inputValue.push(e);
  lastInputValue = (inputValue[inputValue.length - 2]);

  if ((e == '+' || e == '-' || e == '/' || e == '*' || e === ".")
    && (lastInputValue === e)) {
    return
  }
  else if ((e == '+' || e == '-' || e == '/' || e == '*') && (lastInputValue == '+' || lastInputValue == '-' || lastInputValue == '/' || lastInputValue == '*')) {
    let dispLength = +(display_2.innerText.length - 1);
    let delLastSymbol = display_2.innerText.substring(0, dispLength);
    display_2.innerText = (delLastSymbol + e);

    SumbitSwitch = e;
    return
  }

  if (display.innerText === 'HELLO') {
    display.innerText = '';
  }

  if ((display_3.innerText !== '') && (display_2.innerText == '') && (e)) {
    stateZero()
  }

  if (e == 'DEL') {
    return display.innerText = 0, display_2.innerText = '', display_3.innerText = '', inputState_1 = '',
      inputState_2 = '', saveResultinput = '', sumbitResult = '', inputValue = [], pressDel = true;
    ;
  }

  if (e === 'CE') {
    display.innerText = display.innerText.slice(0, -1);
    return display.innerText;
  }

  if (e == 'C') {
    display.innerText = '';
    return display.innerText;
  }

  if (e == '+/-') {
    if (display.innerText[0] === "-") {
      const state = display.innerText.slice(1);
      return display.innerText = state;
    }
    display.innerText.slice(0, -3);
    const state = display.innerText;
    const revers = ("-" + state);
    return display.innerText = revers;
  }

display.innerText += e;

  if ((e == '+' || e == '-' || e == '/' || e == '*') && (!saveResultinput)) {
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
  if (e == '=') {
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
  buttonCalc.addEventListener('click', (e) => ValueClick(e.target.innerText))
}

