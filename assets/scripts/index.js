function askNumberFirst () {
   let a = document.querySelector ("#a").value
    return a
}

function askNumberSecond () {
    let b = document.querySelector ("#b")
    return b.value
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



