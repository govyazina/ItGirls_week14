function askNumberFirst () {
    return document.querySelector ("#a").value;
}

function askNumberSecond () {
    return document.querySelector ("#b").value;

}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculate(operation, operator) {
    let a = Number(askNumberFirst());
    let b = Number(askNumberSecond());
    document.querySelector("#result").value = sum(a, b);

}


//colors

let i;

function changeColor(click) {
    let element = click.target;

    let colors = ['green', 'pink', 'yellow', 'blue', 'violet'];
    if (i<4) {
        i++
    }
    else {
        i=0;
    }
    element.setAttribute("class", colors[i]);
}
