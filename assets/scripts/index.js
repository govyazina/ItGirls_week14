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

//gallery

let photoNumber = 0;

function prevPhoto() {
    photoNumber--;
    if (photoNumber<0) {
        photoNumber=5;
    }
    changePhoto(photoNumber);
}

function nextPhoto() {
    photoNumber++;
    if (photoNumber>5) {
        photoNumber=0;
    }
    changePhoto(photoNumber);
}

function changePhoto(i) {
    let photo = [
        './assets/img/IMG_3862.jpeg',
        './assets/img/IMG_3863.jpeg',
        './assets/img/IMG_3864.jpeg',
        './assets/img/IMG_3867.jpeg',
        './assets/img/IMG_3874.jpeg',
        './assets/img/IMG_3876.jpeg',
    ];

    document.querySelector(".photo img").setAttribute("src", photo[i]);
}