const body = document.querySelector("body");
const buttonBackground = document.querySelector('.button-background');
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

let count = 3;
let firstInput;
let secondInput;
let sum;

const start = () => {

    inputValues();

}

const add = () => {
    
}

const inputValues = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            outputTxt.textContent += buttons[i].value;
            addSpaceBtwChars();
        });

    }
}

const deleteOne = () => {
    let text = outputTxt.textContent;
    text = text.slice(0, text.length - 1);
    outputTxt.textContent = text;
}

const deleteAll = () => {
    outputTxt.textContent = "";
}



buttonBackground.addEventListener('click', () => {
    count++;
    if (count % 3 === 0) {
        first();
    }else if (count % 3 === 1) {
        second();
    }else if(count % 3 === 2){
        third();
    }
});

const third = () => {
    body.classList.remove('body-two');
    body.classList.add('body-three');
    buttonBackground.classList.remove('button-background-two');
    buttonBackground.classList.add('button-background-three');
    buttonCircle.classList.remove('button-two');
    buttonCircle.classList.add('button-three');
    header.classList.remove('header-two');
    header.classList.add('header-three');
    output.classList.remove('output-two');
    output.classList.add('output-three');
    input.classList.remove('inputB-two');
    input.classList.add('inputB-three');
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].classList.remove('new-buttons-2');
        buttons[index].classList.add('new-buttons-3');
    }
    reset.classList.remove('inputB-two');
    reset.classList.add('inputB-three');
    del.classList.remove('inputB-two');
    del.classList.add('inputB-three');
    equal.classList.remove('inputB-two');
    equal.classList.add('inputB-three');
    switchButton.classList.remove('button-two');
    switchButton.classList.add('button-three');
}

const second = () => {
    body.classList.add('body-two');
    body.classList.remove('body-three');
    buttonBackground.classList.add('button-background-two');
    buttonBackground.classList.remove('button-background-three');
    buttonCircle.classList.add('button-two');
    buttonCircle.classList.remove('button-three');
    header.classList.add('header-two');
    header.classList.remove('header-three');
    output.classList.add('output-two');
    output.classList.remove('output-three');
    input.classList.add('inputB-two');
    input.classList.remove('inputB-three');
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].classList.add('new-buttons-2');
        buttons[index].classList.remove('new-buttons-3');
    }
    reset.classList.add('inputB-two');
    reset.classList.remove('inputB-three');
    del.classList.add('inputB-two');
    del.classList.remove('inputB-three');
    equal.classList.add('inputB-two');
    equal.classList.remove('inputB-three');
    switchButton.classList.add('button-two');
    switchButton.classList.remove('button-three');
}

const first = () => {
        body.classList.remove('body-two');
        body.classList.remove('body-three');
        buttonBackground.classList.remove('button-background-two');
        buttonBackground.classList.remove('button-background-three');
        buttonCircle.classList.remove('button-two');
        buttonCircle.classList.remove('button-three');
        header.classList.remove('header-two');
        header.classList.remove('header-three');
        output.classList.remove('output-two');
        output.classList.remove('output-three');
        input.classList.remove('inputB-two');
        input.classList.remove('inputB-three');
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].classList.remove('new-buttons-2');
            buttons[index].classList.remove('new-buttons-3');
        }
        reset.classList.remove('inputB-two');
        reset.classList.remove('inputB-three');
        del.classList.remove('inputB-two');
        del.classList.remove('inputB-three');
        equal.classList.remove('inputB-two');
        equal.classList.remove('inputB-three');
        switchButton.classList.remove('button-two');
        switchButton.classList.remove('button-three');
}

start();
