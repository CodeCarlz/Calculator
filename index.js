// const button = document.querySelectorAll('button')
// const result = document.getElementById('result')
// const addition = document.getElementById('addition')
// const  numberBtn = document.querySelectorAll('.number')
// const subtraction = document.getElementById('subtraction')
// const equal = document.getElementById('equal')

// let totalValue = 0;
// let operator = null;
// let firstNumber = '';
// let secondNumber = '';
// function displayUserInput(){
//   button.forEach(buttons => { 
//     buttons.onclick = () => {
//       if(buttons.value !== "c" && buttons.value !== "ac"){
//         resultValue(buttons.value);
//        }else if(buttons.value === 'c'){
//         if(secondNumber !== ''){
//           secondNumber = ''
//           result.innerText = firstNumber;
//         }else{
//           clear();
//         }
//        }else if(buttons.value === 'ac'){
//         clear()
//        }
//       if(!isNaN(buttons.value) || buttons.value == "."){
//         if(operator){
//           secondNumber += buttons.value
//         } else if (totalValue !== 0) {
//           firstNumber = totalValue.toString() + buttons.value;
//           totalValue = 0;
//         } else{
//           firstNumber += buttons.value
//         } 
//       }else if((buttons.value === "+" ) ||
//       (buttons.value === "x") ||
//       (buttons.value === "-") || 
//       (buttons.value === "/")){
//         operator = buttons.value
//       }
//     }
//   });
// }

// function clear(){
//   result.innerText = '';
//   totalValue = '';
//   firstNumber = 0;
//   secondNumber = 0;
//   operator = null;
// }

// function resultValue(clickValue){
//   result.innerText += clickValue
// }

// function computation(){
//  if(operator === '+'){
//  totalValue = Number(firstNumber) + Number(secondNumber)
//  firstNumber = totalValue
//  }else if (operator === "x"){
//   totalValue = Number(firstNumber) * Number(secondNumber)
//  }else if (operator === "/"){
//   totalValue = Number(firstNumber) / Number(secondNumber)
//  }else if (operator === "-"){
//   totalValue = Number(firstNumber) - Number(secondNumber)
//  }
//  console.log(totalValue)
//  result.innerText = totalValue
//  firstNumber = totalValue.toString();
//   secondNumber = ''; // Reset the secondNumber for the next input
//   operator = null; // Reset the operator
  
//   totalValue = 0; // Clear the totalValue for the next operation
// }


// equal.addEventListener('click', computation)
// displayUserInput()


const button = document.querySelectorAll('button');
const result = document.getElementById('result');
const equal = document.getElementById('equal')


let totalInput = '';
let operator = null;
let firstNumber = "";
let secondNumber = "";

function resultInput(){
button.forEach(buttons => {
  buttons.onclick = () => {
      if(buttons.value !== "c" && buttons.value !== "ac"){
        result.innerText += buttons.value
      }else if(buttons.value === "c"){
        if(secondNumber !== ""){
          secondNumber = ""
          result.innerText = firstNumber
        }else{
          clearValue();
        }
      }else if (buttons.value === "ac"){
        clearValue();
      }
      if(!isNaN(buttons.value) || buttons.value === "."){
          if(operator){
            secondNumber += buttons.value
          }else if(totalInput !== 0){
            firstNumber += totalInput.toString() + buttons.value
            totalInput = 0;
          }else{
            firstNumber += buttons.value
          }  
      }else if(buttons.value === "+" || buttons.value === "-" || buttons.value === "*" || buttons.value === "/"){
        operator = buttons.value
      }
     console.log(totalInput)
     console.log(firstNumber)
     console.log(secondNumber)
    }
  });
}

function clearValue(){
result.innerText = '';  
totalInput = '';
operator = null;
firstNumber = "";
secondNumber = "";

}

function calculate(){
  let firstNum = parseFloat(firstNumber)
  let secondNum = parseFloat(secondNumber)
  if(operator === "+"){
    totalInput =  firstNum + secondNum
  }
  if(operator === "-"){
    totalInput = firstNum - secondNum
  }
  if(operator === "*"){
    totalInput = firstNum * secondNum
  }
  if(operator === "/"){
    totalInput = firstNum / secondNum
  }

  result.innerText = totalInput
  firstNumber = totalInput.toString();
  secondNumber = ''
  operator = null;
  totalInput = 0;
}

equal.addEventListener('click', calculate)

resultInput()