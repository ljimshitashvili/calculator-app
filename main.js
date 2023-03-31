//Variables from HTML page
const body = document.querySelector("body");
const switcher = document.querySelectorAll('.switcher');
const buttonCircle = document.querySelector('.button');
const header = document.querySelector("header");
const output = document.querySelector(".output");
const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
const reset = document.querySelector("#reset");
const del = document.querySelector("#del");
const equal = document.querySelector("#equal");
const switchButton = document.querySelector('.button');
const outputTxt = output.firstElementChild;

//Additional variables that helps in the calculation.
let count = 3;
let firstInput;
let secondInput;
let operator;
let sum;


//This function makes calculating operations and outputs the content.
const calculate = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            let btnValue = buttons[i].value;
            if(btnValue >= 0 && btnValue <= 9 || btnValue === "."){
                outputTxt.textContent += btnValue;
            }else if (btnValue === "+" || btnValue === "-" || btnValue === "x" || btnValue === "/") {
                firstInput = Number(outputTxt.textContent);
                outputTxt.textContent = "";
                operator = btnValue;
                console.log("firstInput: " + firstInput);
            }else if(btnValue === "="){
                secondInput = Number(outputTxt.textContent);
                switch (operator){
                    case '+': 
                        sum = firstInput + secondInput;
                        break;
                    case "-":
                        sum = firstInput - secondInput;
                        break;
                    case "x":
                        sum = firstInput * secondInput;
                        break;
                    case "/":
                        sum = firstInput * secondInput;
                        break; 
                }
                outputTxt.textContent = sum;
            }
        });
    }
}

//This function is called from html page and removes the latest character from output.
const deleteOne = () => {
    let text = outputTxt.textContent;
    text = text.slice(0, text.length - 1);
    outputTxt.textContent = text;
}

//This function is called from html page and removes all inputs and outputs from page.
const deleteAll = () => {
    outputTxt.textContent = "";
}

//This cycle changes the design of entire page.
for (let i = 0; i < switcher.length; i++) {
    switcher[i].addEventListener('click', () => {
        if(i === 0) {
            body.classList.add('theme-1');
            body.classList.remove('theme-2');            
            body.classList.remove('theme-3');            
        }else if(i === 1) {
            body.classList.add('theme-2');
            body.classList.remove('theme-1');            
            body.classList.remove('theme-3');            
        }else if(i === 2) {
            body.classList.add('theme-3');
            body.classList.remove('theme-2');            
            body.classList.remove('theme-1');            
        }
    });
}

calculate();