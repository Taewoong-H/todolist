const body = document.querySelector('body');

const IMG_NUM = 6;

function paintImage(num) {
    const img = new Image();
    img.src = `images/${num}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function genNumber() {
    const number = Math.ceil(Math.random() * IMG_NUM);
    return number;
}

function init() {
    const randomNumber = genNumber();
    paintImage(randomNumber);
}

init();