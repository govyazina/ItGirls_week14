//calculate
let operator;

function checkOperator() {
    operator = document.querySelector('input[name="operators"]:checked').value;
    document.querySelector(".calc__operator").innerHTML = operator;
    calculate();
}


function askNumberFirst() {
    return document.querySelector("#a").value;
}

function askNumberSecond() {
    return document.querySelector("#b").value;

}

const sum = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const div = (a, b) => a / b;

function calculate() {
    let first = askNumberFirst();
    let second = askNumberSecond();
    let a;
    let b;
    let result = "?";
    if (first && second) {
     a = Number(first);
     b = Number(second);
    }
    else {
        document.querySelector("#result").value = result;
        return;
    }
    //


    if (operator === "+") {
        result = sum(a, b)
    } else if (operator === "-") {
        result = sub(a, b);
    } else if (operator === "*") {
        result = mul(a, b);
    } else if (operator === "/") {
        if (b === 0) {
            result = "на ноль делить низзя"
        }
        else {
        result = div(a, b);
        }
    }
    document.querySelector("#result").value = result;

}


//colors

let i;

function changeColor(click) {
    const element = click.target;
    const colors = ['green', 'pink', 'yellow', 'blue', 'violet'];
    if (i < colors.length - 1) {
        i++
    } else {
        i = 0;
    }
    element.setAttribute("class", colors[i]);
}

//gallery

let photoNumber = 0;
const photo = [
    './assets/img/IMG_3862.jpeg',
    './assets/img/IMG_3863.jpeg',
    './assets/img/IMG_3864.jpeg',
    './assets/img/IMG_3867.jpeg',
    './assets/img/IMG_3874.jpeg',
    './assets/img/IMG_3876.jpeg',
];


function prevPhoto() {
    photoNumber--;
    if (photoNumber < 0) {
        photoNumber = 5;
    }
    changePhoto(photoNumber);
}

function nextPhoto() {
    photoNumber++;
    if (photoNumber > 5) {
        photoNumber = 0;
    }
    changePhoto(photoNumber);
}

function changePhoto(i) {
    document.querySelector(".photo img").setAttribute("src", photo[i]);
}