const body = document.querySelector('body');

const IMG_NUM = 6;

function paintImage(num) {
    const img = new Image();
    img.src = `images/${num}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
    const span = document.createElement("span");
    if(num===1){
        span.innerText = "Turkey, Istanbul, Galata tower";
        span.classList.add("location_text");
        body.appendChild(span);
    }
    else if(num===2){
        span.innerText = "Turkey, Pammukale";
        span.classList.add("location_text");
        body.appendChild(span);
    }
    else if(num===3){
        span.innerText = "US, Grandkaniun";
        span.classList.add("location_text");
        body.appendChild(span);
    }
    else if(num===4){
        span.innerText = "Anywhere";
        span.classList.add("location_text");
        body.appendChild(span);
    }
    else if(num===5){
        span.innerText = "Turkey, Kapadokia";
        span.classList.add("location_text");
        body.appendChild(span);
    }
    else if(num===6){
        span.innerText = "Anywhere";
        span.classList.add("location_text");
        body.appendChild(span);
    }
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